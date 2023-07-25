
    const imgarr=["./assets/images/gallery/one.jpg",
    "./assets/images/gallery/two.jpg",
    // "./assets/images/gallery/four.png",
    "./assets/images/gallery/4.jpg" ,
    "./assets/images/gallery/3.jpg",
    "./assets/images/gallery/2.jpg",
    "./assets/images/gallery/5.jpg",
    "./assets/images/gallery/6.jpg",
    "./assets/images/gallery/7.jpg",
    "./assets/images/gallery/10.jpg",
    "./assets/images/gallery/11.jpg",
    "./assets/images/gallery/12.jpg",
    "./assets/images/gallery/13.jpg",
    "./assets/images/gallery/15.jpg",
    "./assets/images/gallery/16.jpg",
    "./assets/images/gallery/17.jpg",
    "./assets/images/gallery/18.jpg",
    "./assets/images/gallery/19.jpg",
    "./assets/images/gallery/20.jpg",
    "./assets/images/gallery/21.jpg",
    "./assets/images/gallery/22.jpg",
    "./assets/images/gallery/23.jpg",
    "./assets/images/gallery/24.jpg",
    "./assets/images/gallery/25.jpg",
    "./assets/images/gallery/30.jpg",
    "./assets/images/gallery/27.jpg",
    "./assets/images/gallery/28.jpg",
    "./assets/images/gallery/32.jpg",
    ];

    var html="";

imgarr.forEach(arrayhtml);
document.getElementById("imggallery").innerHTML=html;


function arrayhtml(item){
    html= html +  `<a href="  ${item} " target="_blank"> <img class="photojs" src=" ${item}" class="rounded-0" alt="..." style="width:480px ;hight:350px;padding:5px 0px;"></a>`;
   }

// getImageGallery();


// Videos starting path
const videoarr=[  ["https://www.youtube.com/embed/9dVeZIuGvEY","Violin","The violin is a string instrument played with a bow, producing a rich and expressive sound. It has four strings and is known for its versatility in classical music, as well as its use in various genres like folk, jazz, and contemporary styles. The violin's elegant design and ability to evoke emotions make it a captivating instrument in the hands of skilled musicians.","Last updated 5 days mins ago"],
["https://www.youtube.com/embed/yYtkWCezabY","Tabla Lessons","Tabla is used in various music genres, including classical, folk, and devotional music in India. It provides rhythmic accompaniment to other instruments and vocal performances. Tabla players use complex hand movements to produce a wide range of sounds and intricate patterns. Its versatility and ability to express emotions make it a fundamental component of Indian music ensembles.","Last updated 15 days mins ago"], 
["https://www.youtube.com/embed/2OpGa6QHwVM","Guitar","The guitar is a popular musical instrument with strings that can be plucked or strummed. It is versatile, capable of playing melodies, chords, and solos, and is widely used in various genres such as rock, pop, folk, and jazz. Its distinctive sound and portability make it a beloved instrument for musicians around the world.","Last updated 25 days mins ago"]
];

var videolink="";

videoarr.forEach(arrayvideo);
document.getElementById("gal_divvideo").innerHTML=videolink;


function arrayvideo(item){
    videolink= videolink +  `
    <div style="width:490px; hight:350px;padding:5px 10px; position: static;">
    <iframe width="680px" height="350px" src=${item[0]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <h5  >${item[1]}</h5>
    <p class="videoprg">${item[2]}</p>
    <p class="card-text"><small class="text-body-secondary">${item[3]}</small></p>
    </div>
    `
}



