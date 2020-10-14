// 注意：每次调用 $.get() 或 $.post() 或 $.ajax() 的时候，
// 会先调用 ajaxPrefilter 这个函数
// 在这个函数中，可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function (options) {
  // 在发起真正的 Ajax 请求之前，统一拼接请求的根路径
  options.url = 'http://ajax.frontend.itheima.net' + options.url;
  //优化：如果发起请求的路径中有需要权限(就是以/my/开头的)的。统一设置请求头
  if (options.url.indexOf('/my/') !== -1) {
    options.headers = { Authorization: localStorage.getItem('token') || '' };
  }
})

