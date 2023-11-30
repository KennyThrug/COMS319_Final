import { STATE_POST_PAGE, STATE_CREATE_POST_PAGE, STATE_ABOUT_PAGE, STATE_LOGIN_PAGE } from './App'
//Function for Top Banner
export function createTopBanner(setPageId) {
    return (
        <div style={{ borderBottom: "solid", borderColor: "gray" }}>
            <nav class="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6" style={{ marginLeft: "13%" }}>
                    <span class="font-semibold text-xl tracking-tight">Blog Name</span>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                        <a href='#' onClick={() => setPageId(STATE_ABOUT_PAGE)} class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            About Us
                        </a>
                        <a href='#' onClick={() => setPageId(STATE_POST_PAGE)} class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            All Posts
                        </a>
                        <a href='#' onClick={() => setPageId(STATE_CREATE_POST_PAGE)} class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Create Post
                        </a>
                        <a href='#' onClick={() => setPageId(STATE_ABOUT_PAGE)} class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Search
                        </a>
                    </div>
                    <div>
                        <a href='#' onClick={() => setPageId(STATE_LOGIN_PAGE)} class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign in</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

//Function that returns the html for the side banner, which is used for every page
//TODO: Find a better color and make this banner look better
export function createSideBanner(setPageId, posts) {
    return (
        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar" style={{ marginTop: "4%" }}>
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800" style={{ borderRight: "solid", borderColor: "gray" }}>
                <ul className="space-y-2 font-medium">
                    {posts.map((cur_post, index) => (
                        <li>
                            <button style={{ width: "100%" }} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="ms-3">{cur_post.postTitle}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}