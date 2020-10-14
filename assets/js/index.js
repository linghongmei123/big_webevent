$(function () {
    //1 获取用户的基本信息
    getUserInfo();
    function getUserInfo() {
        $.ajax({
            method: 'GET',
            url: '/my/userinfo',
            //headers就是请求头配置对象，因为有权限
            // headers: {
            //     Authorization: localStorage.getItem('token') || ''
            // },
            success: function (res) {
                console.log(res);
                if (res.status !== 0) {
                    return layer.msg('获取用户信息失败！');
                }
                // layer.msg('获取用户信息成功！');
                // 2 获取信息成功之后渲染用户头像
                renterAvatar(res.data);//一定记得要传参，不然没有实参，形参没有意义
            }
        })
    }
    function renterAvatar(user) {
        //2.1设置文本  欢迎用户
        var name = user.nickname || user.username;
        $('#welcome').html('欢迎&nbsp;&nbsp;' + name);
        //2.1 按需渲染用户的头像
        if (user.user_pic !== null) {
            //渲染图片头像
            var first = user.user_pic;
            $('.text-avatar').hide();
            $('.layui-nav-img').attr('src', first).show();
        } else {
            // 渲染文本头像
            var tex = name[0].toUpperCase();
            $('.layui-nav-img').hide();
            $('.text-avatar').html(tex).show();
        }
    }
    //点击退出按钮，退出登录，
   
    $('#btnLogOut').on('click',function(){
        //提示用户是否确认退出
        layer.confirm('确定退出吗?', {icon: 3, title:'提示'}, function(index){
            //1 清空本地存储中的token
          localStorage.removeItem('token');
            //2 返回到登录首页
            location.href='/login.html';
            //3 关闭弹出框
            layer.close(index);
          });

    })




})