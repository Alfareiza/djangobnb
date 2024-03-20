import Conversation from '@/app/components/inbox/Conversation';

const InboxPage = () => {
    return (
        <main className="max-w-[100%] max-auto px-6">
            <h1 className="my-4 pb-2 text-2xl">Inbox</h1>
            <Conversation/>
            <Conversation/>
            <Conversation/>
        </main>
        )
    }

export default InboxPage;
