import Image from "next/image";
import {
  ChatBubbleLeftIcon,
  HandThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";

type PostBodyProps = {
  images?: string[];
  description: string;
};

type Reaction = {
  id: string;
  userId: string;
  userImage: string;
  name: string;
};

type PostFooterProps = {
  reactions: Reaction[];
};

const PostHeader = ({}) => (
  <div className="flex items-center gap-4">
    <div className="relative h-10 w-10 overflow-hidden rounded-full">
      <Image
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        fill
        alt="User Avatar"
      />
    </div>
    <div className="text-gray-500">
      <h1 className="text-base font-semibold">Sepural Gallery</h1>
      <div className="space-x-2 text-xs font-medium">
        <span>15h</span>
        <span>Public</span>
      </div>
    </div>
  </div>
);

const PostBody = ({ images, description }: PostBodyProps) => (
  <div className="space-y-2">
    <p className="text-sm text-gray-500">{description}</p>
    <div>
      {images?.map((image, idx) => (
        <div className="relative h-[100px]" key={idx}>
          <Image src={image} className="object-cover" fill alt="Post Image" />
        </div>
      ))}
    </div>
  </div>
);

const PostFooter = ({ reactions }: PostFooterProps) => {
  const moreReactors = reactions.length - 3;
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex -space-x-3">
          {reactions.slice(0, 3)?.map((reaction) => (
            <div
              key={reaction.id}
              className="relative h-8 w-8 overflow-hidden rounded-full object-cover"
            >
              <Image
                className="rounded-full"
                src={reaction.userImage}
                fill
                alt="User who reacted"
              />
            </div>
          ))}
          {moreReactors > 0 && (
            <div className="z-10 grid h-8 w-8 place-items-center rounded-full bg-gray-600 text-xs font-bold text-white">
              +{moreReactors}
            </div>
          )}
        </div>
        <div className="space-x-4 text-sm font-bold text-gray-500">
          <span className="cursor-pointer hover:underline">4 Comments</span>
          <span className="cursor-pointer hover:underline">5 Share</span>
        </div>
      </div>
      <div className="flex justify-between border-y py-2">
        <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 px-4 text-gray-500 hover:bg-gray-200">
          <HandThumbUpIcon className="h-5 w-5" />
          <span>Like</span>
        </div>
        <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 px-4 text-gray-500 hover:bg-gray-200">
          <ChatBubbleLeftIcon className="h-5 w-5" />
          <span>Comment</span>
        </div>
        <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg p-2 px-4 text-gray-500 hover:bg-gray-200">
          <ShareIcon className="h-5 w-5" />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

function PostItem() {
  return (
    <div className="max-w-xl space-y-4 rounded-lg bg-white p-4">
      <PostHeader />
      <PostBody
        images={[
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        ]}
        description="If you think adventure is dangerous, try routine, its lethal Paulo Coelho! Good morning all friends"
      />
      <PostFooter
        reactions={[
          {
            id: "1",
            userId: "1",
            userImage:
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name: "Joshua Dela Cruz",
          },
          {
            id: "2",
            userId: "2",
            userImage:
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name: "John Dela Cruz",
          },
          {
            id: "3",
            userId: "3",
            userImage:
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name: "Ezekiel Dela Cruz",
          },
          {
            id: "4",
            userId: "4",
            userImage:
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name: "Lydia Dela Cruz",
          },
          {
            id: "5",
            userId: "5",
            userImage:
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            name: "Rhael Dela Cruz",
          },
        ]}
      />
    </div>
  );
}

export default PostItem;
