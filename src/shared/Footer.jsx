import Logo from "../components/icons/Logo";
import { footerCols } from "../utils/content";

export default function Footer() {
  return (
    <footer className="bg-gradient-bottom">
      <div className="m-auto flex max-w-[90rem] justify-between px-24 py-32 max-xl:px-16 max-xl:py-24 max-lg:grid max-lg:gap-y-18 max-lg:px-8 max-md:px-6 max-sm:pb-16">
        <div>
          <div>
            <a className="flex items-center gap-x-3 max-md:gap-x-2" href="#">
              <Logo
                className="stroke-primary-500 h-6"
                alt="NoteFlow Logo Icon"
                width={5}
              />
              <p className="text-primary-50 text-xl font-bold tracking-tight max-md:text-lg/8 max-md:tracking-tighter">
                NoteFlow
              </p>
            </a>
          </div>
          <div className="w-full py-10 ">
            <div className=" max-w-2xl">
              <p className="text-primary-100 text-base md:text-lg mb-10 leading-relaxed">
                Get product updates, new feature alerts, and exclusive
                productivity tips — straight to your inbox.
              </p>

              {/* Input + Button */}
              <div className="flex flex-col sm:flex-row gap-4 ">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 
                   text-white w-full md:w-72 focus:outline-none"
                />

                <button className="px-6 py-3 rounded-lg bg-primary-500 text-primary-1300 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(4,max-content)] gap-x-24 max-xl:gap-x-18 max-lg:gap-x-24 max-md:grid-cols-2 max-md:gap-y-14">
          {footerCols.map((col) => (
            <div key={col.id}>
              <p className="text-primary-50 mb-8 text-xl/loose font-semibold max-md:text-lg/8 max-md:tracking-tight">
                {col.category}
              </p>
              <ul className="flex flex-col gap-y-4">
                {col.links.map((link, i) => (
                  <li key={i} className="cursor-pointer">
                    <a
                      className="text-primary-50 hover:text-primary-500 transition-properties text-lg/8 font-light max-xl:text-base/loose"
                      href="#"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
