type CommonFields = {
    id?: string;
    created_at?: string;
}

export const CompaignStatusArray  = ['Draft', 'Sent', 'Archived'];
export const EmailStatusArray  = ['Draft', 'Completed'];

type CompaignStatus = typeof CompaignStatusArray[number]
type EmailStatus = typeof EmailStatusArray[number]

export type Compaign = {
    name: string;
    from: string | undefined;
    subject: string | undefined;
    user_id?: string | undefined;
    email_id?: string | undefined;
    status?: CompaignStatus | undefined;
} & CommonFields;

export type Email = {
    title: string;
    content: string;
    status: EmailStatus;
} & CommonFields;

export type Subscriber = {
    email: string;
    user_id: string;
} & CommonFields;

export type User = {} & CommonFields;