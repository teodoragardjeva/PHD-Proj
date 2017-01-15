System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            class User {
                constructor(id, firstname, lastname, age) {
                    this.id = id;
                    this.firstname = firstname;
                    this.lastname = lastname;
                    this.age = age;
                }
            }
            exports_1("User", User);
        }
    }
});

//# sourceMappingURL=user.js.map
