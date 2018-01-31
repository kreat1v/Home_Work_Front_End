(function () {
    'use strict';

    function MenuList() {
        var _this = this;

        this.show = false;

        this.toggle = function (name) {
            if (name == _this.show) {
                _this.show = false;
            } else {
                _this.show = name;
            }
        };

        this.list = [
        {
            name: 'File',
            link: [
                {
                    img: 'fa fa-file-o',
                    name: 'New Document'
                },
                {
                    img: 'fa fa-floppy-o',
                    name: 'Save'
                },
                {
                    img: 'fa fa-sign-out',
                    name: 'Exit'
                }
            ]
        },
        {
            name: 'Edit',
            link: [
                {
                    img: 'fa fa-undo',
                    name: 'Undo Typing'
                },
                {
                    img: 'fa fa-repeat',
                    name: 'Redo'
                },
                {
                    img: 'fa fa-scissors',
                    name: 'Cut'
                },
                {
                    img: 'fa fa-files-o',
                    name: 'Copy'
                }
            ]
        },
        {
            name: 'View',
            link: [
                {
                    img: 'fa fa-cog',
                    name: 'Parameter Info'
                },
                {
                    img: 'fa fa-file-word-o',
                    name: 'Recent Files'
                },
                {
                    img: 'fa fa-th',
                    name: 'Toolbar'
                }
            ]
        },
        {
            name: 'Insert',
            link: [
                {
                    img: 'fa fa-picture-o',
                    name: 'Image'
                },
                {
                    img: 'fa fa-link',
                    name: 'Link'
                },
                {
                    img: 'fa fa-plus',
                    name: 'Formula'
                }
            ]
        },
        {
            name: 'Format',
            link: [
                {
                    img: 'fa fa-bold',
                    name: 'Bold'
                },
                {
                    img: 'fa fa-italic',
                    name: 'Italic'
                },
                {
                    img: 'fa fa-underline',
                    name: 'Underlined'
                },
                {
                    img: 'fa fa-strikethrough',
                    name: 'Strikeout'
                }
            ]
        },
        {
            name: 'Table',
            link: [
                {
                    img: 'fa fa-table',
                    name: 'Insert Table'
                },
                {
                    img: 'fa fa-plus-square-o',
                    name: 'Insert Row'
                },
                {
                    img: 'fa fa-trash-o',
                    name: 'Delete Row'
                }
            ]
        }
        ];
    }

    myApp.controller('MenuList', MenuList);
})();