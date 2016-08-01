namespace Membership {
    export function AddMember(name: string) {

    }

    export namespace Cards {
        export function IssueCard(memberNumber: number) {

        }
    }
}

// access namespace
Membership.AddMember('Garrett');
Membership.Cards.IssueCard(1234);

// triple slash example /// <reference path="07-namespace.ts" />
