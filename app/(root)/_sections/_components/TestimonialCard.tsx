"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import { REVIEWS_QUERYResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const StarRatings = dynamic(() => import("react-star-ratings"), { ssr: false });

export function TestimonialCard({
  author,
  description,
  image,
  designation,
  rating,
}: REVIEWS_QUERYResult[0]) {
  const [mounted, setMounted] = useState(false);
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const words = description?.split(" ") || [];
  const isLong = words.length > 50;
  const shortDescription = words.slice(0, 50).join(" ") + "...";

  return (
    <div className="bg-white/20 border border-gray-300 rounded-xl p-6 h-full flex flex-col justify-between hover:shadow-lg transition duration-300">
      {/* Avatar + Name */}
      <div className="flex flex-col items-center">
        <Image
          src={image ? urlFor(image).url() : "/placeholder_avatar.png"}
          alt={author ? `${author}'s avatar` : "User avatar"}
          width={96}
          height={96}
          className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md"
        />
        <h2 className="text-xl font-semibold mt-4 text-center text-black dark:text-white uppercase">
          {author}
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {designation}
        </span>
      </div>

      {/* Rating */}
      <div className="mt-4 text-center">
        <Suspense fallback={<div>Loading stars...</div>}>
          {mounted && (
            <StarRatings
              rating={rating}
              starRatedColor="gold"
              starEmptyColor="gray"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="3px"
            />
          )}
        </Suspense>
      </div>

      {/* Description */}
      <div className="mt-4 text-center text-gray-700 dark:text-gray-300 text-sm">
        <p>{showFull || !isLong ? description : shortDescription}</p>
        {isLong && (
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowFull(true); // Opens modal when clicked
            }}
            className="mt-2 text-primary font-semibold underline text-xs"
          >
            {showFull ? "Read less" : "Read more"}
          </Link>
        )}
      </div>

      {/* Modal for full description using ShadCN */}
      <Dialog open={showFull} onOpenChange={setShowFull}>
        <DialogTrigger className="hidden">Open</DialogTrigger>
        <DialogContent className="w-full max-w-4xl sm:max-w-5xl max-h-[80vh] overflow-y-auto px-6 py-4">
          <DialogTitle className="text-2xl font-semibold mb-4">
            Full Review
          </DialogTitle>
          <DialogDescription className="text-base text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {description}
          </DialogDescription>
          <button
            onClick={() => setShowFull(false)}
            className="mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
          >
            Close
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
