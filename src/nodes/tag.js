/**
 * Created by tkachenko on 14.04.15.
 */

ATF.invoke(['$directiveProvider', 'utils'], function ($directiveProvider, utils) {
    var tagController = {
        link: function (name, scope, children, args, vars) {
            var elem = document.createElement(name);

            utils.each(args[0], function (value, key) {
                var expr;
                if (typeof value === 'function') {
                    scope.$watch(function (scope) {
                        return value.call(elem, scope);
                    }, function (value) {
                        elem.setAttribute(key, value);
                    });
                } else if (utils.isExpr(value)) {
                    expr = utils.expr(value);

                    scope.$watch(function (scope) {
                        return expr.call(elem, scope, vars);
                    }, function (value) {
                        elem.setAttribute(key, value);
                    });
                } else {
                    elem.setAttribute(key, value);
                }
            });

            children(scope, elem).forEach(function (child) {
                elem.appendChild(child);
            });

            return elem;
        }
    };

    ['div', 'em', 'span', 'a', 'img', 'video', 'ul', 'li', 'p', 'i', 'iframe', 'form', 'dl', 'dt', 'dd', 'button'].forEach(function (tag) {
        $directiveProvider.register(tag, tagController);
    });
});
