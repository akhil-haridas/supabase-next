type CommonFields = {
    id?: string;
    created_at?: string;
}

export const CompaignStatusArray  = ['Draft', 'Sent', 'Archived'];

type CompaignStatus = typeof CompaignStatusArray[number]

export type Compaign = {
    name: string;
    from: string | undefined;
    subject: string | undefined;
    user_id?: string | undefined;
    email_id?: string | undefined;
    status?: CompaignStatus | undefined;
} & CommonFields;

export type Email = {} & CommonFields;

export type Subscriber = {} & CommonFields;

export type User = {} & CommonFields;