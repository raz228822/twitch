import { currentUser } from "@clerk/nextjs/server";

import { getUserByUsername } from "@/lib/user-service";
import { StreamPlayer } from "@/components/stream-player";

interface CreatePageProps {
    params: Promise<{ username: string }>;
};

const CreatePage = async ({
    params
}: CreatePageProps) => {
    const { username } = await params;
    const externalUser = await currentUser()
    const user = await getUserByUsername(username)

    if (!user || user.externalUserId !== externalUser?.id || !user.stream) {
        throw new Error("Unauthorized");
    }

    return (
        <div className="h-full">
            <StreamPlayer 
                user={user}
                stream={user.stream}
                isFollowing
            />
        </div>
    );
};

export default CreatePage;