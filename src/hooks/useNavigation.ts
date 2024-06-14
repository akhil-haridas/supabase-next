import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export const useNavigation = () => {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const pathname = usePathname()
    return { router, params, searchParams, pathname };
};
