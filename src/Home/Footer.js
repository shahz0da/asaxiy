import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Footer() {
    return (
        <div>
            <div>
                <h1>Asaxiy kompaniyasi haqida</h1>
                <p>Butun O‘zbekiston bo‘ylab maishiy texnika va elektronika tovarlarini yetkazib beruvchi kompaniyamizning asosiy afzalligi – ko‘p yillik ish tajribasi va yaxshi nom qozonib ulgurganidir. Asos solinganidan buyon Asaxiy internet-do‘koni va uning jamoasi iste’mol bozorining talablari tendensiyalarini tinimsiz kuzatib kelmoqda; bu esa bizga eng so‘nggi texnologiyalar va innovatsion yechimlardan hamisha boxabar bo‘lib turish imkonini beradi.</p>
                <p>Kompaniiya mutaxassislari mijozlarimizning istaklarini diqqat bilan o‘rganishadi, shu bois resurs doimiy tarzda hamyonbop narxlardagi sifatli yangi mahsulotlar bilan boyitilib kelmoqda.</p>

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Kompaniyaning ish tamoyili</Accordion.Header>
                        <Accordion.Body>
                            Har bir xaridor telefonlar va boshqa gadjetlarni qulay shart-sharoitlarda, maksimal darajada tez tanlay olishi kerak; shuning uchun biz intuitiv tushunarli menyu yaratganmiz, internetning yangi foydalanuvchilari ham uni o‘zlashtirib olishlari oson. Juda qulay bo‘lishini ko‘zlab biz menyu qismini tegishli bo‘limlarga ajratganmiz, ularda siz 15 ming xildan ortiq orgtexnika va unga yondosh tovarlarni topishingiz mumkin. Ular quyidagicha ko‘rinish olgan:

                            • idish-tovoqlar – bu yerda siz kundalik turmushimizda ishlatiladigan turli-tuman uy-ro‘zg‘or buyumlarining eng keraklilarini topasiz. Do‘konimiz saytida taqdim etilgan tovarlar yuqori sifatga va mustahkamlikka ega;
                            • konditsionerlar va uy iqlimi texnikasi – bu bo‘lim o‘z ehtiyojlaringizga mos tarzda foydali xaridlar qilishingizda ko‘maklashadi. Har bir tovarning tavsifi berilgan, bu esa to‘g‘ri tanlash imkonini beradi;
                            • televizorlar, video va audio tovarlari navbatdagi bo‘limda joylashgan, bu bo‘lim maishiy texnika mahsulotlari nomiga munosib. Bu yerda zamon bilan hamqadam tarzdagi funksiyalarning to‘laqonli ro‘yxatiga ega bo‘lgan eng so‘nggi yangi mahsulotlar va ishlanmalar o‘rin olgan;
                            • go‘zallik va salomatlik uchun texnika – doimiy xaridorlarimiz bo‘lmish ayol-qizlarga eng sevimli bo‘limlardan biri. Zero, ular salomatlikning qadriga yetishadi va to‘g‘ri ovqatlanish yo‘li bilan tabiiy go‘zallikka intilishadi;
                            • Kompyuterlar va orgtexnika – eng katta bo‘lim, chunki u kompyuterlashtirish jarayonini osonlashtirishga va ish vaqti sarfini kamaytirishga mo‘ljallangan barcha turdagi aksessuarlar hamda yordamchi butlovchi qismlarni ham o‘z ichiga olgan.

                            Shuningdek, Asaxiy.uz kompaniyamiz o‘yin servislari ishqibozlari haqida ham qayg‘uradi, geymerlar uchun bo‘limi buning yaqqol dalilidir. Bu yerda qudratli kompyuter ta’minoti mahsulotlari, o‘yinbop sichqoncha va klaviaturalar taqdim etilgan; ular o‘yin jarayonini maksimal darajada aniq va bexato amalga oshirishga imkon beradi.

                            Mutolaa ixlosmandlari uchun esa biz audio kitoblar ko‘rinishida takomillashtirilgan adabiyot namunalarini taqdim etmoqdamiz; ularning janr va mavzulari yetarlicha keng ko‘lamli.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Bizning afzalliklarimiz</Accordion.Header>
                        <Accordion.Body>
                            Asaxiy.uz kompaniyasi o‘zining barcha imkoniyatlarini shiddat bilan kengaytirmoqda, bugun biz o‘z mijozlarimizga ancha-muncha chegirmalarni va bir qator shaharlarga tezkor yetkazib berishni taklif etmoqdamiz. Bizning xizmat ko‘rsatish hududimizga Andijon, Buxoro, Farg‘ona, Jizzax, Xorazm, Namangan, Navoiy, Qashqadaryo, Samarqand, Sirdaryo, Surxondaryo va butun Toshkent viloyatidagi, shuningdek, Qoraqalpog‘iston Respublikasidagi shaharlar kiradi. Bu hali biz tovar yetkazib berayotgan hududlarning to‘liq xaritasi emas. Bizning yetkazib berish hududlarimiz bilan batafsil tanishish uchun internet-do‘konimiz mutaxassisiga qo‘ng‘iroq qilishingiz mumkin, u sizni qiziqtiruvchi barcha ma’lumotlarni taqdim etadi.

                            Do‘konimizning har bir xaridori – hurmatli mehmonimizdir, unga biz yoqimli chegirmalar va bonus dasturlarini taklif etamiz. Biz mijoz talablariga mos tovarlarni tanlash jarayonida unga to‘liq hamrohlik qilamiz va istalgan qulay usul bilan yetkazib berishni amalga oshiramiz.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <p>
                    "Asaxiy Books" MCHJ
                    Ro'yxatdan o'tish raqami: 646439
                    INN: 305829008
                    MCHJ rahbari: Allayev Firuz Abdunasimovich</p>
            </div>

            <div>
                
            </div>
        </div>
    )
}

export default Footer