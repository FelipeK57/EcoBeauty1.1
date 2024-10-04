import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

function QuizResult() {
  const recommendations = {
    Liso: {
      mensaje:
        "Cada cabello es único, y el tuyo merece un cuidado especial. Te damos algunos consejos y productos para que puedas sacarle el máximo partido",
      Seco: [
        {
          name: "RUTINA ELVIVE",
          description:
            "Elvive Óleo Extraordinario con su fórmula con 6 óleo de flores preciosas brinda nutrición intensa, brillo extraordinario, control de frizz y protección térmica. Beneficios: Tratamiento que brinda nutrición y brillo. Ideal para nutrir cabellos secos.",
          link: "https://cdn.batitienda.com/baticloud/images/product_picture_1efc98bd99c24bd983b16855e5df5a56_638325382677023900_0_m.png",
        },
        {
          name: "Shampoo Ultra nutritivo Milagros",
          description:
            "Ayuda a prevenir la caída del cabello, estimulando su crecimiento, contiene sustancias lípidas y ácidos grasos que ayudan a fortalecer la fibra capilar. Este Shampoo actúa efectivamente devolviendo al cabello la vitalidad perdida. Regenera y aviva el cabello.",
          link: "https://mercadoglam.com/cdn/shop/products/milagros-shampoo-ultranutritivo-milagros-31594984079404.png?v=1663876725&width=300",
        },
        {
          name: "Garnier Fructis Cabello Fructis Liso y Brillo",
          description:
            "Limpia, alisa el pelo al instante y protege la fibra capilar para un liso duradero sin encrespamiento. Nutre y da brillo Para cabello seco y con frizz",
          link: "https://www.garnier.es/-/media/project/loreal/brand-sites/garnier/emea/es/2023/productos/fructis/liso-y-brillo/shampoo-380ml_3600542024204/3600542024204.png?rev=ce2643636e624403a2150ddedc9f206b",
        },
      ],
      Normal: [
        {
          name: "GARNIER SANDIA",
          description:
            "Revitaliza tu pelo en solo 1 minuto ¡La nueva forma de alimentar tu pelo! Con fórmula vegana, biodegradable, sin siliconas, son parabenos y sin colorantes artificiales, Usala de tres manera, como Acondicionador, como Crema para Peinar o como Mascarilla.",
          link: "https://www.garnier.com.co/-/media/project/loreal/brand-sites/garnier/usa/latam/es/prd-haircare/hair-food/sandia/mask_sandia_front.jpg?w=1200&rev=b8e8e8ecb964461c8775377eb314171b&hash=2B2257DE34E190A5C3F8CDE2EFE1872B",
        },
        {
          name: "Mais Lisos",
          description:
            "Es perfecto para hidratar y nutrir el pelo. Dejando el pelo brillante y sin frizz. Tiene tres modos de uso acondicionador, crema para peinar y tratamiento. Tiene proteínas de arroz, almidón de maíz y aminoácidos por lo que te dará un efecto sano.",
          link: "https://ponto.com.co/cdn/shop/files/Mais_Liso.png?v=1687355188",
        },
        {
          name: "MILAGROS Gotas mágicas",
          description:
            "Ayuda a alargar la fase del crecimiento, fortalece los folículos pilosos del cuero cabelludo, aportándoles una mayor resistencia; además, ayuda a disminuir la caída del cabello.",
          link: "https://elashop.com.co/wp-content/uploads/2021/01/Picsart_22-03-22_20-55-18-684.jpg",
        },
        {
          name: "SALON LINE KIT VITAMINA C",
          description:
            "El Kit Shampoo y Acondicionador Hidra Meu Ritual Vitamina C. En conjunto, estos productos garantizan hidratación, limpieza sin resecar el cabello, regeneración y restauración del cabello, brillo intenso y extra de suavidad.",
          link: "https://cdnx.jumpseller.com/mis-vitaminas/image/39386320/Kit_Shampoo_y_Acondicionador_Hidra_Vitamina_C_300_ml_Salon_Line_Mis_Vitaminas_Producto.webp?1693928007",
        },
      ],
      "Maltrado y Dañado": [
        {
          name: "ELVIVE Reparación Total 5 Extreme",
          description:
            "Fórmula enriquecida con activosreconstructores. Para cabello muy maltratado, muy dañado Reduce puntas abiertas, + Bioceramida reparan el daño del cabello maltratado, puntas abiertas, orzuela, quiebre, falta de brillo.",
          link: "https://www.farmacialeloir.com.ar/img/articulos/elvive_reparacion_total_5_acondicionador_1_imagen2.jpg",
        },
        {
          name: "Reparación Total 5 Tratamiento en capsula",
          description:
            "Su fórmula concentrada concicatri-ceramida repara el pelodañado en profundidad paratener un pelo suave y brillantehasta las puntas.",
          link: "https://m.media-amazon.com/images/I/61pPtsq0XFL.jpg",
        },
      ],
    },
    Ondulado: {
      mensaje:
        "Tus ondas son únicas, ¡y las amamos! Te ayudaremos a encontrar la rutina perfecta para definir, hidratar y controlar el frizz.",
      Seco: [
        {
          name: "Garnier Hair Food Banana",
          description:
            "Fructis Hair Food Banana ultranutritiva nutre en profundidad el pelo y aporta suavidad",
          link: "https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//g/a/garnier-fructis-hair-food-banana-mask-400ml-new_2.jpg",
        },
        {
          name: "SKALA Almidón de Maíz",
          description:
            "Amido de milho, a base de almidón de maíz, óleo de coco, manteca de karite y DPanthenol, repara, fortalece y da brillo.",
          link: "https://palatsi.com.co/cdn/shop/products/skala-almidon_800x.jpg?v=1574258363",
        },
        {
          name: "Garnier Línea Manteca de cacao",
          description: "Revive tus ondas o rizos. Nutre y repara ",
          link: "https://www.garnier.com.co/-/media/project/loreal/brand-sites/garnier/usa/latam/es/prd-haircare/hair-food/mascarilla-rizos/tarro-front.jpg?w=1200&rev=ae09cec475054ab9b80d6a13a9048e8e&hash=581B30E7B9CDBB8816AA1E8842F13121",
        },
        {
          name: "Activador de rizos Cantu de aguacate",
          description:
            "La Crema Activadora de Rizos de Aguacate Cantu suaviza y mejora su patrón de rizos naturales para producir ese volumen sin frizz",
          link: "https://www.lvxo.ec/cdn/shop/files/13_dfb8967f-613f-45a5-b134-3f7ce0bf2cf5.png?v=1692808133",
        },
        {
          name: "Óleo de coco",
          description:
            "si necesitas nutrición e hidratación, me debes usar… Tengo la propiedad de mantener la humedad, te ayudo a controlar el frizz, dejo tu pelo suave y brillante, úsame en todo tipo de textura.",
          link: "https://skala.com.co/cdn/shop/files/Oleo_De_Coco.jpg?v=1684349100",
        },
      ],
      Normal: [
        {
          name: "GARNIER SANDIA",
          description:
            "Revitaliza tu pelo en solo 1 minuto ¡La nueva forma de alimentar tu pelo! Con fórmula vegana, biodegradable, sin siliconas, son parabenos y sin colorantes artificiales, Usala de tres manera, como Acondicionador, como Crema para Peinar o como Mascarilla.",
          link: "https://www.garnier.com.co/-/media/project/loreal/brand-sites/garnier/usa/latam/es/prd-haircare/hair-food/sandia/mask_sandia_front.jpg?w=1200&rev=b8e8e8ecb964461c8775377eb314171b&hash=2B2257DE34E190A5C3F8CDE2EFE1872B",
        },
        {
          name: "SKALA DONA",
          description:
            "Este es un producto con aceite de girasol, coco, aguacate y linaza que te ayudaran a nutrir, hidratar, definir y controlar el frizz en pelo ondulado. Además es MULTIPROPOSITO por lo que puede ser utilizado como: TRATAMIENTO, ACONDICIONADOR y CREMA DE PEINAR ",
          link: "https://skala.com.co/cdn/shop/files/Dona.jpg?v=1684345270",
        },
        {
          name: "GOTAS MAGICAS MILAGROS",
          description:
            "Ayuda a alargar la fase del crecimiento, fortalece los folículos pilosos del cuero cabelludo, aportándoles una mayor resistencia; además, ayuda a disminuir la caída del cabello",
          link: "https://elashop.com.co/wp-content/uploads/2021/01/Picsart_22-03-22_20-55-18-684.jpg",
        },
      ],
      "Maltrado y Dañado": [
        {
          name: "ELVIVE Reparación Total 5 Extreme",
          description:
            "Fórmula enriquecida con activosreconstructores. Para cabello muy maltratado, muy dañado Reduce puntas abiertas, + Bioceramida reparan el daño del cabello maltratado, puntas abiertas, orzuela, quiebre, falta de brillo.",
          link: "https://www.farmacialeloir.com.ar/img/articulos/elvive_reparacion_total_5_acondicionador_1_imagen2.jpg",
        },
        {
          name: "Reparación Total 5 Tratamiento en capsula",
          description:
            "Su fórmula concentrada concicatri-ceramida repara el pelodañado en profundidad paratener un pelo suave y brillantehasta las puntas.",
          link: "https://m.media-amazon.com/images/I/61pPtsq0XFL.jpg",
        },
      ],
    },
    Rizado: {
      mensaje:
        "Si tus rizos son rebeldes y necesitan un poco de amor extra, ¡tenemos la solución perfecta para ti! Descubre nuestra rutina de cuidado",
      Seco: [
        {
          name: "Cacao garnier",
          description:
            "Aplicar sobre el cabello mojado, dejar actuar de 3 a 5 minutos y enjuagar abundantemente para obtener rizos llenos de vitalidad, restaurados e intensamente nutridos.",
          link: "https://www.garnier.com.co/-/media/project/loreal/brand-sites/garnier/usa/latam/es/prd-haircare/hair-food/mascarilla-rizos/tarro-front.jpg?w=1200&rev=ae09cec475054ab9b80d6a13a9048e8e&hash=581B30E7B9CDBB8816AA1E8842F13121",
        },
        {
          name: "Aceite Hydroelixir Etniker",
          description:
            "Muchos tratamientos te ofrecen reparar y nutrir tú cabello de forma natural, sin obtener los mejores resultados. EL HIDROELIXIR es un producto de facíl absorción, tienes la opción de aplicarlo en el cabello húmedo o seco, recibiendo los mismos beneficios y nutrientes que este necesita.",
          link: "https://surticosmeticosb2c.vtexassets.com/arquivos/ids/168195/0120286-oleo-capilar-natural-etniker-hydroelixir.jpg?v=638417034201230000",
        },
        {
          name: "Mascarilla ultra hidratante curly love",
          description:
            "La mascarilla ultra hidratante de curly love es un tratamiento intensivo que nutre y repara el cabello rizado, ondulado y afro. Su fórmula rica en aceites vegetales y manteca de karité, hidrata y nutre en profundidad, dejando el cabello suave, brillante y fácil de peinar.",
          link: "https://ponto.com.co/cdn/shop/files/Mascarilla_Ultra_Hidratante_Curly_Love-450ml.png?v=1684258478&width=713",
        },
        {
          name: "Shampoo Nourishing",
          description:
            "Ideal para todo tipo de pelo y cuero cabelludo seco. Tiene Sábila, aceite de girasol y manzanilla. Si eres de cuero cabelludo graso lo más recomendable es que no me uses mucho ya que te puedo generar más grasa.",
          link: "https://ponto.com.co/cdn/shop/files/Shampoo_Nourishing-290ml.png?v=1684266724",
        },
        {
          name: "TRATAMIENTO MAIS CACHOS – SKALA",
          description:
            "Contiene una mezcla de 3 óleos: Argan, Coco y Patauá (palmera amazónica) y Extracto de Amaranto. Brinda al cabello Fuerza, Hidratación y Suavidad. Previene la ruptura del pelo u horquilla y da un brillo natural. Se usa como Crema de Peinar o como Crema Hidratante.",
          link: "https://skala.com.co/cdn/shop/files/Mais_Cachos.jpg?v=1684347044",
        },
        {
          name: "Kit shampoo + Acondicionador Mais Cachos",
          description:
            "Con tu pelo húmedo y la cantidad necesaria aplica un poco de shampoo en tu cuero cabelludo, masajea muy bien y enjuaga, usa un poco de acondicionador para sellar, retira 100% y listo, continua con tu styling.",
          link: "https://ponto.com.co/cdn/shop/files/KIT-MAIS-CACHOS.png?v=1689171975",
        },
        {
          name: "Óleo de coco",
          description:
            "si necesitas nutrición e hidratación, me debes usar… Tengo la propiedad de mantener la humedad, te ayudo a controlar el frizz, dejo tu pelo suave y brillante, úsame en todo tipo de textura.",
          link: "https://skala.com.co/cdn/shop/files/Oleo_De_Coco.jpg?v=1684349100",
        },
      ],
      Normal: [
        {
          name: "Refrescante Para Rizos Etniker",
          description:
            "Ya no tendrás que lavar tu cabello para REVITALIZAR, RE-HIDRATAR & RE-DEFINIR tu estilo sin sensación pegajosa, ni dura, ni acumulación de producto ( o efecto build-up) y con un agradable aroma de larga duración.",
          link: "https://www.etniker.co/wp-content/uploads/2019/09/Refrescante-Para-Rizos-Etniker-LMAR-300ML.jpg",
        },
        {
          name: "TRATAMIENTO MAIS CACHOS – SKALA",
          description:
            "Es el tratamiento ideal para todo tipo de pelo ondulado y crespo. Es súper liviano así que no sufrirás por tu pelo pesado y aplastado, lo mejor de todo es que es 2 en 1 y lo puedes usar si estas en transición y así dejaras tu pelo definido, hidratado y brillante",
          link: "https://skala.com.co/cdn/shop/files/Mais_Cachos.jpg?v=1684347044",
        },
        {
          name: "GARNIER SANDIA",
          description:
            "Revitaliza tu pelo en solo 1 minuto ¡La nueva forma de alimentar tu pelo! Con fórmula vegana, biodegradable, sin siliconas, son parabenos y sin colorantes artificiales, Usala de tres manera, como Acondicionador, como Crema para Peinar o como Mascarilla.",
          link: "https://www.garnier.com.co/-/media/project/loreal/brand-sites/garnier/usa/latam/es/prd-haircare/hair-food/sandia/mask_sandia_front.jpg?w=1200&rev=b8e8e8ecb964461c8775377eb314171b&hash=2B2257DE34E190A5C3F8CDE2EFE1872B",
        },
        {
          name: "Gotas mágicas Milagros",
          description:
            "Ayuda a alargar la fase del crecimiento, fortalece los folículos pilosos del cuero cabelludo, aportándoles una mayor resistencia; además, ayuda a disminuir la caída del cabello",
          link: "https://elashop.com.co/wp-content/uploads/2021/01/Picsart_22-03-22_20-55-18-684.jpg",
        },
        {
          name: "CREMA PEINAR SALON Line ABACATE DEFINICION ULTRA VOLUMEN",
          description:
            "Diseñada para proporcionar un volumen espectacular y un movimiento natural, esta crema ligera controla el frizz y define tus rizos sin dejar residuos dejando tu cabello suave y manejable durante todo el día. Ideal para cabellos rizados y ondulados",
          link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4TKifsdhNLA12n8TDW-DLdjzeE5cM3NsXQ&s",
        },
      ],
      "Maltrado y Dañado": [
        {
          name: "Fructis Hair Food Papaya",
          description:
            "Fructis Hair Food Papaya ultranutritiva nutre en profundidad el pelo, repara los daños del pelo hasta las puntas. y aporta suavidad",
          link: "https://www.garnier.co.uk/-/media/project/loreal/brand-sites/garnier/emea/uk/en-gb/prd-haircare/hair-food/papaya-and-amla/390ml/8fc56a433aa1791db77a7321d029cb0b29f5ee4b.jpg?rev=8e3afa8659e24b0c8df786201e1bc407&hash=CE538747904E0E9FFBD132A6A4CA7CCD",
        },
        {
          name: "MASCARILLA CAPILAR SALON LINE BOMBA ULTRA HIDRATACION RECONSTRUTORA",
          description:
            "Reconstructor Ultra Hidratación SOS Bomba garantiza 10 veces más hidratación, brillo, suavidad inmediata, además de reconstruir el 73% del cabello dañado y un tratamiento profundo",
          link: "https://krika.vtexassets.com/arquivos/ids/184895/052827.png?v=638606289197700000",
        },
        {
          name: "MASCARILLA GARNIER HAIR FOOD COCO REPARACIÓN 1 MINUTO PARA CABELLO DAÑADO",
          description:
            "Mascarilla Garnier Fructis Hair Food Coco 350ml para reparar tu pelo en solo 1 minuto ¡La nueva forma de alimentar tu pelo!.",
          link: "https://cdnx.jumpseller.com/s-essential/image/51132344/resize/1200/1200?1722005956",
        },
      ],
    },
    Afro: {
      mensaje:
        "Tu cabello afro es una obra de arte, lleno de fuerza y belleza. Estamos aquí para guiarte en la creación de una rutina que lo mantenga hidratado, definido y libre de frizz, resaltando su esencia natural al máximo.",
      Seco: [
        {
          name: "Tratamiento Etniker Pacífico NUTRICIÓN PROFUNDA & BRILLO",
          description:
            "En el Tratamiento Capilar PACÍFICO te traemos una maravillosa nuez propia de la cuenca del río Magdalena, conocida como OLLA DE MONO o MagNutSe, con un gran poder hidratante que unida a nuestras riquezas ancestrales como el Chontaduro, el Borojó y el Coco, hacen de este 4 en 1 el producto ideal para una nutrición profunda y un brillo excepcional.",
          link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ5SH_NPqndvoEsliy9dEqBEJ2iQ3l-Z1UVQ&s",
        },
        {
          name: "Ole de coco",
          description:
            "si necesitas nutrición e hidratación, me debes usar… Tengo la propiedad de mantener la humedad, te ayudo a controlar el frizz, dejo tu pelo suave y brillante, úsame en todo tipo de textura.",
          link: "https://skala.com.co/cdn/shop/files/Oleo_De_Coco.jpg?v=1684349100",
        },
        {
          name: "Oleo de argan",
          description:
            "Soy de Argán, si necesitas nutrición e hidratación, me debes usar… tengo la propiedad de retener la humedad en tu pelo, te ayudo a controlar el frizz y mantener las puntas cerradas… Así te doy un efecto sano y brillante, también úsame como pre-poo o co wash... Tu pelo te lo agradecerá.",
          link: "https://skala.com.co/cdn/shop/files/Oleo_De_Argan.jpg?v=1684349100",
        },
        {
          name: "Mais crespos",
          description:
            "Mas crespos, más rizos, más afro, más ondas, más pelo lindo. Soy Mais Crespos el producto perfecto para hidratar y definir tu pelo ya que tengo aceite de argán, aceite de pataúa y extracto de amaranto.",
          link: "https://ponto.com.co/cdn/shop/files/Mais_Crespos.png?v=1687355188",
        },
        {
          name: "Co-wash curly love",
          description:
            "Amo el pelo crespo y por eso me llamo Curly Love, soy el Cowash, Soy un shampoo diferente, mi textura es densa porque tengo aceite de coco, manteca de mango y aceite de jojoba. Mi función es limpiar de manera muy muy suave tu pelo y cuero cabelludo cuando están extremadamente secos.",
          link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw63KzUYUxFo6aIxKwx-_w1CN3Fat8-3uWIw&s",
        },
      ],
      Normal: [
        {
          name: "Bomba de vitaminas SKALA",
          description:
            "Es una bomba de crecimiento para tu cabello ya que tiene aceite de ricino.",
          link: "https://skala.com.co/cdn/shop/files/Bomba_De_Vitaminas.jpg?v=1684349100",
        },
        {
          name: "SHAMPOO LIMPIEZA PROFUNDA ETNIKER",
          description:
            "El Shampoo Limpieza Profunda de ETNIKER retira, de una manera suave, residuos dejados por shampoos, acondicionadores, ceras, cremas para peinar, productos de fijación, entre otros que disminuyen el brillo y la vitalidad del cabello.",
          link: "https://www.etniker.co/wp-content/uploads/2021/03/SHAMPOO-LIMPIEZA-PROFUNDA-ETNIKER.jpg",
        },
        {
          name: "Refrescante Para Rizos Etniker",
          description:
            "Ya no tendrás que lavar tu cabello para REVITALIZAR, RE-HIDRATAR & RE-DEFINIR tu estilo sin sensación pegajosa, ni dura, ni acumulación de producto ( o efecto build-up) y con un agradable aroma de larga duración.",
          link: "https://www.etniker.co/wp-content/uploads/2019/09/Refrescante-Para-Rizos-Etniker-LMAR-300ML.jpg",
        },
        {
          name: "Mascarilla Etniker",
          description:
            "La Mascarilla Deep conditioner está especialmente formulada para desenredar, suavizar y humectar la fibra capilar. Ayuda a hidratar el cabello poroso, seco y quebradizo, disminuyendo las puntas abiertas aportando un aspecto saludable y vital al cabello étnico.",
          link: "https://d2k4simfy5dbs2.cloudfront.net/eyJidWNrZXQiOiJjYXNhbmRyYS1zdGF0aWMiLCJrZXkiOiJwcm9kdWN0cy84MTQ2LzY3NjEzLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTAwMCwiaGVpZ2h0IjoxMDAwfX19",
        },
      ],
      "Maltrado y Dañado": [
        {
          name: "Fructis Hair Food Papaya",
          description:
            "Fructis Hair Food Papaya ultranutritiva nutre en profundidad el pelo, repara los daños del pelo hasta las puntas. y aporta suavidad",
          link: "https://www.garnier.co.uk/-/media/project/loreal/brand-sites/garnier/emea/uk/en-gb/prd-haircare/hair-food/papaya-and-amla/390ml/8fc56a433aa1791db77a7321d029cb0b29f5ee4b.jpg?rev=8e3afa8659e24b0c8df786201e1bc407&hash=CE538747904E0E9FFBD132A6A4CA7CCD",
        },
        {
          name: "MASCARILLA CAPILAR SALON LINE BOMBA ULTRA HIDRATACION RECONSTRUTORA",
          description:
            "Reconstructor Ultra Hidratación SOS Bomba garantiza 10 veces más hidratación, brillo, suavidad inmediata, además de reconstruir el 73% del cabello dañado y un tratamiento profundo",
          link: "https://krika.vtexassets.com/arquivos/ids/184895/052827.png?v=638606289197700000",
        },
        {
          name: "MASCARILLA GARNIER HAIR FOOD COCO REPARACIÓN 1 MINUTO PARA CABELLO DAÑADO",
          description:
            "Mascarilla Garnier Fructis Hair Food Coco 350ml para reparar tu pelo en solo 1 minuto ¡La nueva forma de alimentar tu pelo!.",
          link: "https://cdnx.jumpseller.com/s-essential/image/51132344/resize/1200/1200?1722005956",
        },
      ],
    },
  };

  const location = useLocation();
  const { hairType, hairState } = location.state || {};

  const recommendedProducts = recommendations[hairType][hairState];

  return (
    <main className="relative">
      {/* Fondo */}
      <div
        className="absolute -z-50 inset-0 bg-cover bg-center opacity-[0.08] w-full h-screen"
        style={{ backgroundImage: "url('./fondo.png')" }}
      ></div>

      {/* Barra de navegación */}
      <Navbar />

      {/* Contenido principal */}
      <section className="relative w-full flex flex-col gap-8 lg:px-44 xl:px-52 p-6 lg:p-10 rounded-md">
        {/* Título */}
        <h1 className="text-center text-4xl md:text-6xl font-bold text-accent">
          ESTOS SON LOS PRODUCTOS QUE NECESITAS
        </h1>

        {/* Subtítulo */}
        <p className="text-center font-medium text-lg md:text-xl p-2">
          {hairType && recommendations[hairType].mensaje}
        </p>

        {/* Lista de productos recomendados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {recommendedProducts.map((product, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 rounded-xl transition-all bg-opacity-40 bg-backdrop-blur-sm bg-white shadow-md"
            >
              <div className="bg-white grid place-content-center md:w-3/4 md:rounded-r-none rounded-t-xl  md:rounded-l-xl">
                {/* Imagen del producto */}
                <img
                  src={product.link}
                  alt={product.name}
                  className="mx-auto rounded-t-xl md:rounded-l-xl md:rounded-r-none w-56  h-56 my-auto object-cover rounded-lg"
                />
              </div>
              {/* Información del producto */}
              <div className="flex w-full flex-col p-4 gap-2 my-auto justify-center">
                <h2 className="text-xl md:text-xl font-bold text-accent">
                  {product.name}
                </h2>
                <p className="text-base md:text-base font-medium">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default QuizResult;
