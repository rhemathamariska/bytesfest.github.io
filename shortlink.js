const shorlink = {
    '/contact' : "https://icaksh.my.id",
};

var getUrl  = window.location.pathname.split('/')[1];
if (getUrl !== 'assets' || getUrl !== 'files' || getUrl !== ''){
    window.location.replace(shorlink[getUrl]);
}
