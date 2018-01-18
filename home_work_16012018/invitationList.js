angular.module('invitationApp', []).controller('invitationController', function() {
        var invitationList = this;

        invitationList.name = '';

        invitationList.invited = [
            {text:'Komarov Konstantin Sergeevich', id:1},
            {text:'Ivanov Vanya Petrovich', id:2},
            {text:'Durov Pavel Valeryevich', id:3}];

        invitationList.add = function() {
            invitationList.invited.push({text:invitationList.addText, id:invitationList.invited.length + 1});
            invitationList.addText = '';
        };
    });