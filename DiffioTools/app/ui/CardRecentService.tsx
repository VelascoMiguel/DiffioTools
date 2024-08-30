export default function CardRecentService({ nameService, detailService, amount }: any) {

    return (
        <>
            <div className="flex items-center">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                    <img
                        className="aspect-square h-full w-full"
                        alt="Avatar"
                        src="/avatars/01.png"
                    />
                </span>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                        {nameService}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {detailService}
                    </p>
                </div>
                <div className="ml-auto font-medium">${amount}</div>
            </div>
        </>
    )

}