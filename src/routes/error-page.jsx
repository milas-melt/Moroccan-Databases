export default function ErrorPage() {
    return (
        <>
            {/*
              This example requires updating:
              
              ```
              <html class="h-full">
              <body class="h-full">
              ```
            */}
            <div className="grid grid-cols-2 h-screen">
                <div className="flex h-screen">
                    <main className="flex flex-col justify-around ml-24 h-full w-full">
                        <p className="text-base font-semibold leading-8 text-indigo-600">
                            404
                        </p>
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Page not found
                            </h1>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Sorry, an unexpected error has occurred.
                            </p>
                        </div>
                        <div className="">
                            <a
                                href="/"
                                className="text-sm font-semibold leading-7 text-indigo-600"
                            >
                                <span aria-hidden="true">&larr;</span> Back to
                                home
                            </a>
                        </div>
                    </main>
                </div>

                <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
                    <img
                        src="https://images.unsplash.com/photo-1508611388476-6cf524b2b637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvcCUyMG1vcm9jY298ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </div>
        </>
    );
}
