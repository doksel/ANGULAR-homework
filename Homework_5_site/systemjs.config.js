(function (global) {
    System.config({
        paths: {
            'npm:': 'node_modules/'
        },
        map: {
            app: 'app',

            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            //
            'moment': 'node_modules/moment',
            'ng2-bootstrap':              'node_modules/ng2-bootstrap',
            //

            'rxjs': 'npm:rxjs',
        },
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            //
            'ng2-bootstrap':              { format: 'cjs', main: 'bundles/ng2-bootstrap.umd.js', defaultExtension: 'js' },
            'moment':                     { main: 'moment.js', defaultExtension: 'js' },
            //
        }
    });
})(this);