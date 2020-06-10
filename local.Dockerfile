FROM mcr.microsoft.com/dotnet/core/sdk:2.1 AS build-env

################################################################
# Install node.js v10.x
#
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - \ 
    && apt update \
    && apt install -y nodejs

################################################################
# Cache layer with package.json for node_modules
#
ADD ./DevActivator/package.json ./DevActivator/npm-shrinkwrap.json ./tmp/
RUN cd /tmp \
    && npm i npm@latest -g \
    && npm ci

################################################################
# Cache layer with NuGet.Config and *.csproj for nuget packages
#
COPY ./DevActivator.Common.BL/DevActivator.Common.BL.csproj ./app/DevActivator.Common.BL/
COPY ./DevActivator.Common.DAL/DevActivator.Common.DAL.csproj ./app/DevActivator.Common.DAL/

COPY ./DevActivator.Meetups.BL/DevActivator.Meetups.BL.csproj ./app/DevActivator.Meetups.BL/
COPY ./DevActivator.Meetups.DAL/DevActivator.Meetups.DAL.csproj ./app/DevActivator.Meetups.DAL/
COPY ./DevActivator.Meetups.Tests/DevActivator.Meetups.Tests.csproj ./app/DevActivator.Meetups.Tests/

COPY ./DevActivator/DevActivator.csproj ./app/DevActivator/
COPY ./ElectronNetAngular.sln ./app/

RUN cd /app \
    && dotnet restore \
    && mkdir -p /home/app \
    && cp -a /app /home

################################################################
# Copy everything else and build
#
COPY . /home/app
RUN cp -a /tmp/node_modules /home/app/DevActivator

WORKDIR /home/app/DevActivator
RUN dotnet publish -c Debug -o out --no-restore --no-dependencies

################################################################
# Build runtime image
#
FROM mcr.microsoft.com/dotnet/core/aspnet:2.1
WORKDIR /home/app
COPY --from=build-env /home/app/DevActivator/out .

ENTRYPOINT ["dotnet", "DevActivator.dll"]