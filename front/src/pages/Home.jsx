import { useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import { GrClose } from "react-icons/gr";


export default function Home() {
    const [isOpenRightSideBare, setIsOpenRightSideBare] = useState(false);
    const [isOpenLeftSideBare, setIsOpenLeftSideBare] = useState(false);

    // useEffect(() => {
    //     const handleResize = () => {
    //     if (window.innerWidth >= 768){
    //         setIsOpenRightSideBare(false)
    //         setIsOpenLeftSideBare(false)
    //     }
    //     };
    //     window.addEventListener("resize", handleResize);
    //     handleResize();  
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);

    return (
        <div id='home'>
            <Navbar iorsb={setIsOpenRightSideBare} iolsb={setIsOpenLeftSideBare}/>

            <div className={`home-rsb${isOpenRightSideBare ? " open" : ""}`}>
                RightSidebare
                <GrClose onClick={()=>setIsOpenRightSideBare(false)}/>
            </div>

            <div className={`home-lsb${isOpenLeftSideBare ? " open" : ""}`}>
                LeftSidebare
                <GrClose onClick={()=>setIsOpenLeftSideBare(false)}/>
            </div>

            <div className='home-main'>Mainbox(Feed)
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quam? 
                Culpa maxime rerum, ipsa neque fuga sit totam atque magnam quibusdam conse
                quatur aut. Officiis in vero dignissimos est corrupti! Consequatur sed qu
                aerat vero tempore odio distinctio ex facere, nam suscipit, culpa dolor, 
                dolorum dolores nulla asperiores expedita magnam facilis cumque eveniet la
                borum autem ea sequi? Sunt quos, doloremque aut sequi animi quidem quaerat 
                distinctio quam nemo facere laudantium inventore maiores. In architecto rei
                ciendis exercitationem ex temporibus rerum iure ut. Pariatur, neque. Nemo q
                uia atque accusantium provident qui ea nesciunt veniam doloribus eius neque
                . Fuga recusandae expedita tenetur sapiente enim aperiam beatae repellendus
                , deleniti illum temporibus totam repellat optio voluptatum fugiat odio imp
                edit nostrum ea, facilis velit hic! Eum sequi fuga est aut libero ipsam vel
                 nisi corporis quae mollitia quasi facilis iste nemo natus, minima saepe ve
                 lit soluta dolorum aliquam nulla ipsum exercitationem maiores. Laboriosam 
                 corporis, nobis cumque earum maxime obcaecati eaque itaque veritatis quam 
                 aspernatur corrupti minus iure, saepe ratione possimus suscipit vero at eu
                 m pariatur beatae accusamus qui. Assumenda beatae laborum possimus incidun
                 t quibusdam voluptate! Exercitationem explicabo quasi ad ducimus ex asperi
                 ores delectus minima tempora officia cumque vitae consequuntur, quidem vol
                 uptate non itaque dolorum voluptates provident? Necessitatibus nobis praes
                 entium ex, ipsam a suscipit saepe, velit blanditiis debitis doloribus prov
                 ident aliquam eaque nisi optio eligendi numquam sapiente qui laborum perfe
                 rendis. Aut esse, exercitationem ducimus quae magnam illum porro nobis in 
                 ipsa perferendis asperiores ad minima ab, iste odit voluptas saepe distinc
                 tio quaerat reprehenderit similique fugit quasi. Ipsum eligendi asperiores
                  nam! Repellendus ipsa doloribus doloremque. Ipsa delectus, consequuntur m
                  agni eligendi nemo aut neque vel aperiam laborum sunt ex ea ut perspiciat
                  is minima blanditiis obcaecati sequi dignissimos quibusdam dolorum? Ducim
                  us fugit iusto distinctio temporibus id dolores odit cumque quo quod exer
                  citationem laborum dolor, ipsa quaerat nemo esse libero unde nihil rem si
                  nt iure architecto earum nostrum. Et rem iusto, fugit molestias blanditii
                  s ipsam excepturi at voluptatem, quaerat nostrum, odit corrupti alias rec
                  usandae earum est corporis. Vel veniam ipsam inventore, beatae enim optio
                  , corporis aut culpa reiciendis dignissimos aliquid accusamus ut perferen
                  dis laudantium temporibus. Officiis aperiam quod nemo quam iusto ad eius 
                  laudantium enim esse molestiae optio totam mollitia ea, dignissimos venia
                  m sapiente consequatur distinctio aspernatur quo magnam earum nobis praes
                  entium hic. Officia, accusamus! Eum ratione consequatur officia? Quos, de
                  bitis inventore molestiae consequuntur, quae quidem aspernatur natus nisi
                   autem, blanditiis adipisci est veritatis accusamus amet nesciunt. Quos m
                   olestiae explicabo quidem quisquam voluptatem voluptates distinctio null
                   a ratione eius. Corrupti consequatur ipsa doloribus excepturi ex adipisc
                   i labore ipsum? Quos minima necessitatibus dicta sit! Adipisci accusanti
                   um nihil, repellat laboriosam numquam officiis nesciunt optio temporibus
                   ! Harum ipsam molestias blanditiis doloribus nobis ducimus fugit in temp
                   oribus vero mollitia illum, recusandae ea impedit cupiditate quasi nihil
                    inventore dolorum, aperiam cum perferendis accusantium. Ducimus nulla d
                    icta repudiandae expedita doloremque autem ex, vel ipsam odit officiis 
                    excepturi corporis nisi, iusto, ullam error soluta. Nulla ad impedit, q
                    uis quas ullam praesentium officia sint harum esse totam laboriosam ten
                    etur voluptatum voluptatem non at, animi dolore, sequi accusamus qui ip
                    sum aspernatur maiores illum nesciunt repudiandae? Dignissimos ea moles
                    tiae quaerat nihil iste, autem illum dolore doloremque amet et similiqu
                    e, deleniti perferendis illo cupiditate. Ab vero possimus nihil aperiam
                     id voluptatibus aliquam, reprehenderit est odio at porro magnam tempor
                     a soluta perferendis tenetur repudiandae sunt obcaecati fuga repellat 
                     earum nobis dolores voluptate adipisci amet. Ipsam non consectetur min
                     ima nisi. Illum cupiditate consequatur autem vero tempora et molestiae
                     , delectus voluptate tenetur voluptates blanditiis nam in nulla dolore
                     mque veritatis? Magnam eius saepe debitis cupiditate nulla nisi cum qu
                     am unde provident quibusdam eaque, molestias impedit ipsam distinctio 
                     placeat porro aspernatur at exercitationem, vero nam! Facilis quaerat 
                     quisquam ea fuga saepe voluptas placeat, ut cumque sit obcaecati sed a
                     utem quae. Sunt error, debitis exercitationem deserunt natus commodi q
                     uos, minus mollitia voluptas illo vel enim magni? Delectus architecto 
                     nobis eligendi non recusandae? Ab eaque, fugit autem mollitia providen
                     t maiores ex esse sint. Commodi eos veritatis qui, veniam necessitatibus 
                     consectetur nam neque reprehenderit explicabo quae autem doloremque quam omnis hic aliquid quod magnam itaque ex alias quibusdam cupiditate quas dolore ullam facere? Repudiandae voluptatum facilis, saepe nisi, reprehenderit quos ullam, ratione suscipit accusantium repellendus voluptate. Corporis quia tenetur aperiam non veritatis! Deserunt, consectetur quam ullam nostrum autem quibusdam labore! Ab vero mollitia sunt, voluptatem quia rem? Magni ab debitis quibusdam, officiis ea nemo a. Distinctio accusantium itaque neque odio, soluta nobis corporis quo harum a rerum earum ex sed ducimus explicabo dignissimos reprehenderit perspiciatis ipsam, voluptatum laborum, non magnam eligendi aliquam nihil. Nobis recusandae, explicabo dolorum possimus voluptatibus, adipisci optio ducimus minus est consequatur ipsam numquam veritatis nam dolor molestias corporis! Voluptatibus nihil assumenda itaque iure ad dicta impedit cumque! Quis libero facilis officia dolorem accusamus eos distinctio velit hic maiores temporibus saepe repellendus quasi expedita placeat aliquid ipsam, atque enim rerum. Pariatur magnam nihil odit, quo earum autem nulla laboriosam inventore nisi et facere dignissimos animi sint nesciunt officia veritatis at adipisci nemo quos vero culpa consequuntur suscipit incidunt? Nisi voluptate autem debitis cumque voluptatem. Harum dolorem temporibus facilis quasi vitae. Quod nam asperiores tenetur nobis voluptas consectetur suscipit enim velit libero maxime repellendus repudiandae provident voluptatum quae, alias sapiente rerum beatae hic atque perspiciatis? Natus cum porro ipsum aspernatur itaque architecto ullam facilis eligendi voluptatum dicta! Obcaecati incidunt debitis ducimus delectus labore beatae assumenda corporis porro consequuntur, provident, blanditiis ut sapiente magni vitae sit soluta est quisquam exercitationem veniam praesentium nemo numquam, molestias tenetur! Exercitationem tenetur vitae saepe, eius nihil minus, ratione atque quae amet sed quaerat est cupiditate quidem accusamus dolores voluptatibus illum deleniti adipisci magnam dolorum nulla quibusdam quam debitis! Eveniet repellendus quasi id? Aperiam ratione doloremque vel quod iure deleniti facilis, nostrum officia tempora similique fuga exercitationem repellendus neque ullam dolorem itaque nobis expedita ipsam. Voluptates numquam libero, eos est nostrum veritatis, ipsa magni id vel maxime itaque vitae, ipsam iste voluptate dolorem laboriosam ullam. Culpa necessitatibus nihil consequuntur reiciendis aliquid vitae quidem id, facere earum, adipisci dignissimos quo perferendis nam unde accusantium cum magni voluptate soluta consectetur amet aperiam aliquam velit. Commodi corporis praesentium earum dolores!
            </div>
        </div>
    )
}
