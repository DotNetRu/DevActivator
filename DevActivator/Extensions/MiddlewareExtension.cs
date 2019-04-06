using System;
using DevActivator.Middlewares;
using Microsoft.AspNetCore.Builder;

namespace DevActivator.Extensions
{
    public static class MiddlewareExtension
    {
        public static string FormatMessageLine(this string str)
            => $"{Environment.NewLine}{str ?? string.Empty}{Environment.NewLine}{Environment.NewLine}";

        public static IApplicationBuilder UseExceptionMiddleware(this IApplicationBuilder builder)
            => builder.UseMiddleware<ExceptionMiddleware>();
    }
}