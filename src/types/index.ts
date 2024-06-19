......type CommonFields = {
    id?: string;
    created_at?: string;
}

export const CompaignStatusArray  = ['Draft', 'Sent', 'Archived'];
export const EmailStatusArray  = ['Draft', 'Completed'];
export const SubscriberStatusArray  = ['Active', 'Inactive', 'Completed'];

type CompaignStatus = typeof CompaignStatusArray[number]
type EmailStatus = typeof EmailStatusArray[number]
type SubscriberStatus = typeof SubscriberStatusArray[number]

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
    owner_id: string;
    status: SubscriberStatus;
} & CommonFields;

export type User = {
    dark_mode: boolean;
    email: string;
} & CommonFields;
