import { Moment } from "moment";

export interface IFriendReference {
    friendId: string;
}

export interface ISession {
    talkId: string;
    startTime: Moment;
    endTime: Moment;
}

export interface IMeetup {
    id: string;
    name: string;
    communityId: string;
    friendIds: IFriendReference[];
    venueId: string;
    sessions: ISession[];
}

export type IApiSession = ISession & {
    startTime: string;
    endTime: string;
};

export type IApiMeetup = IMeetup & {
    sessions: IApiSession[];
};
