var posts=["posts/b2dd6d15.html","posts/c02163f6.html","posts/afea9a7e.html","posts/ae1af740.html","posts/267e357a.html","posts/516d1297.html","posts/be8242ff.html","posts/826f8a5f.html","posts/1c7dce2.html","posts/9a9d1238.html","posts/dfb8a81f.html","posts/b79b78c9.html","posts/9dfb5df1.html","posts/ea5a5fc.html","posts/e401234d.html","posts/4a17b156.html","posts/8ab2dce2.html","posts/9520.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};