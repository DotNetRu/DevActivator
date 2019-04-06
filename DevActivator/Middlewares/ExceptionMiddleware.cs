using System;
using System.Data;
using System.Net;
using System.Security;
using System.Text;
using System.Threading.Tasks;
using DevActivator.Extensions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.Extensions.Logging;
using Microsoft.Net.Http.Headers;

namespace DevActivator.Middlewares
{
   public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger _log;

        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> log)
        {
            _next = next;
            _log = log;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                HttpStatusCode statusCode;
                string message;
                var request = context.Request;
                var logMsg = $"Ошибка в приложении: {ex.ToString().FormatMessageLine()}" +
                             $"URL запрашиваемого ресурса: {request.GetDisplayUrl().FormatMessageLine()}" +
                             $"URL Refferer: {request.Headers[HeaderNames.Referer].ToString().FormatMessageLine()}" +
                             $"IP клиента: {context.Connection.RemoteIpAddress?.ToString().FormatMessageLine()}" +
                             $"DNS имя клиента: {request.Host.Value?.FormatMessageLine()}" +
                             $"Браузер клиента: {request.Headers[HeaderNames.UserAgent].ToString().FormatMessageLine()}";

                switch (ex)
                {
                    case ArgumentException _:
                    case NoNullAllowedException _:
                    case FormatException _:
                        _log.LogWarning(ex, logMsg);
                        statusCode = HttpStatusCode.BadRequest;
                        message = ex.Message;
                        break;
                    case NotSupportedException _:
                    case NotImplementedException _:
                        _log.LogWarning(ex, logMsg);
                        statusCode = HttpStatusCode.MethodNotAllowed;
                        message = "Операция не поддерживается сервером";
                        break;
                    case MissingMemberException _:
                        _log.LogInformation(ex, logMsg);
                        statusCode = HttpStatusCode.NotFound;
                        message = "Объект не найден";
                        break;
                    case SecurityException _:
                        _log.LogWarning(ex, logMsg);
                        statusCode = HttpStatusCode.Forbidden;
                        message = "Вам не хватает прав на данное действие";
                        break;
                    default:
                        _log.LogError(ex, logMsg);
                        statusCode = HttpStatusCode.InternalServerError;
                        message = $"500 {nameof(HttpStatusCode.InternalServerError)}";
                        break;
                }

                context.Features.Get<IHttpResponseFeature>().ReasonPhrase = null;
                if (context.Response.Body.CanSeek)
                {
                    context.Response.Body.SetLength(0L);
                }

                context.Response.ContentType = "text/plain; charset=utf-8";
                context.Response.StatusCode = (int) statusCode;
                await context.Response.WriteAsync(message, Encoding.UTF8);
            }
        }
    }

}