using System.Net;

namespace EnglishWord.Middleware
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;

        public ExceptionMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context, ILogger<ExceptionMiddleware> logger)
        {
            try
            {
                await _next.Invoke(context);
            }
            catch (WebException ex) when (ex.Response is HttpWebResponse response)
            {
                context.Response.StatusCode = (int)response.StatusCode;
                await context.Response.WriteAsync($"{ex.Message}");
                logger.LogError(ex.Message);
                logger.LogError(ex.StackTrace);
            }
            catch (Exception ex)
            {
                await context.Response.WriteAsync($"{ex.Message}");
                logger.LogError(ex.Message);
                logger.LogError(ex.StackTrace);
            }
        }
    }
}
