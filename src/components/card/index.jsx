import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { cn } from "@/util/cn";

export function Card({ title, badges, description, imageUrl, actions }) {
  return (
    <>
      <div className="card shrink-0 bg-base-100 shadow-xl w-full md:w-1/2 max-w-80">
        <figure>
          <Image src={imageUrl} alt={title} width={660} height={430} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex gap-2">
            {badges.map((badge, index) => (
              <div
                key={index}
                className={cn(`badge badge-${badge.color} badge-outline`)}
              >
                {badge.text}
              </div>
            ))}
          </div>
          <p>{description}</p>
          <div className="card-actions justify-end">
            {actions.map((action, index) => (
              <Link
                key={index}
                className={cn(
                  `btn btn-${action.style}-outline`,
                  action.isDisabled && "btn-disabled",
                  action.tooltip && "tooltip tooltip-bottom",
                )}
                href={action.url}
                data-tip={action.tooltip}
                rel="noopener noreferrer"
              >
                {action.text}{" "}
                {action.isExternal ? (
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
