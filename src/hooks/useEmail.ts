import { Email, EmailStatusArray } from "@/types";
import { useState } from "react";

export const useEmail = () => {
    const [email, setEmail] = useState<Email>({
        title: 'A new Email',
        content: '',
        status: EmailStatusArray[0]
    });
}