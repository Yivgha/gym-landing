import { ClassType, SelectedPage } from '@/shared/types'
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from './Class'
import classes from "@/data/classes";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {

  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">

          <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
              <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
              >
                  <div className="md:w-3/5">
                      <HText>OUR CLASSES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
                  </div>
        </motion.div>
        

        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] parentBox scroll-smooth"
    x-data="{}"
    x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
        >
                  <ul x-ref="logos" className="flex items-center justify-center md:justify-start animate-infinite-scroll logos-slide">
                      {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item?.description}
                          image={item.image}
                          
              />
            ))}
          </ul>
          
              </div>
          </motion.div>
    </section>
  )
}

export default OurClasses