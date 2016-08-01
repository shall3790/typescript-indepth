var Membership;
(function (Membership) {
    function AddMember(name) {
    }
    Membership.AddMember = AddMember;
    var Cards;
    (function (Cards) {
        function IssueCard(memberNumber) {
        }
        Cards.IssueCard = IssueCard;
    })(Cards = Membership.Cards || (Membership.Cards = {}));
})(Membership || (Membership = {}));
// access namespace
Membership.AddMember('Garrett');
Membership.Cards.IssueCard(1234);
// triple slash example /// <reference path="07-namespace.ts" />
//# sourceMappingURL=07-namespace.js.map