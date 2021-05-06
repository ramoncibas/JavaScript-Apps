const text = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus lectus nunc, vitae fringilla turpis rutrum vitae. Aenean rhoncus sodales tortor pulvinar pharetra. Fusce pellentesque, orci viverra porttitor sagittis, sapien dolor tincidunt augue, ac pulvinar risus dolor sed lectus. Etiam venenatis nulla in purus ornare placerat. Sed sit amet libero lacus. Morbi finibus purus pulvinar, venenatis neque eu, sodales ipsum. Curabitur a facilisis magna. Vestibulum nisl eros, commodo volutpat quam et, tincidunt laoreet lectus. Integer tincidunt diam sit amet metus pellentesque, quis faucibus leo pharetra. Donec orci nunc, rhoncus non ipsum vitae, aliquam ultricies velit`,`Mauris nibh risus, egestas vel ornare sit amet, ultricies in dolor. Vivamus lacinia ligula vitae consequat vestibulum. Nulla in pretium erat. Maecenas et arcu magna. Suspendisse vehicula porttitor congue. Aliquam risus urna, luctus quis tincidunt quis, condimentum at turpis. Cras tempor neque a orci suscipit efficitur`,`Duis viverra sit amet massa in convallis. Praesent quis ultrices tortor. Etiam vitae odio bibendum, auctor nibh quis, malesuada nibh. Nunc ut mollis arcu. Proin venenatis dictum mi ut auctor. Praesent feugiat nibh et metus placerat, ut tristique turpis interdum. Sed convallis diam et risus ornare, sit amet ullamcorper metus iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut ac ornare nisi. Mauris euismod lectus non condimentum scelerisque. Nulla ante enim, commodo at dignissim a, tincidunt a erat. Vestibulum quis congue urna. Nam semper odio eget elit volutpat, sed aliquet nibh varius. Quisque eget purus urna. Fusce finibus libero sed tortor ultricies feugiat. Proin iaculis vitae justo nec ultrices`,`Suspendisse fringilla augue ipsum, quis interdum mi volutpat quis. Nam vel tortor posuere, consectetur odio sed, cursus libero. Morbi sit amet odio vitae ante aliquam maximus. Cras aliquet tortor sit amet lacus efficitur, sed imperdiet sem porta. Integer eget mollis nisl. Mauris convallis ante nisi, nec eleifend dui mattis sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus`,`Mauris eu ultrices nisl, vitae commodo arcu. Nunc ut laoreet magna. Donec pellentesque odio eget consequat gravida. In ex nulla, pellentesque non aliquet vitae, feugiat in eros. Curabitur vitae sapien ultrices, venenatis felis id, egestas magna. Mauris ac efficitur nisl. Aliquam dapibus urna sed blandit varius. Etiam eu magna justo. Integer aliquam lacinia nisi eu suscipit. Etiam lacinia risus id lacus sodales, tempus pretium orci tempus. Duis est sem, dictum nec mauris vel, condimentum feugiat nulla. Maecenas porttitor elementum placerat`,`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus lectus nunc, vitae fringilla turpis rutrum vitae. Aenean rhoncus sodales tortor pulvinar pharetra. Fusce pellentesque, orci viverra porttitor sagittis, sapien dolor tincidunt augue, ac pulvinar risus dolor sed lectus. Etiam venenatis nulla in purus ornare placerat. Sed sit amet libero lacus. Morbi finibus purus pulvinar, venenatis neque eu, sodales ipsum. Curabitur a facilisis magna. Vestibulum nisl eros, commodo volutpat quam et, tincidunt laoreet lectus. Integer tincidunt diam sit amet metus pellentesque, quis faucibus leo pharetra. Donec orci nunc, rhoncus non ipsum vitae, aliquam ultricies velit`,`Mauris nibh risus, egestas vel ornare sit amet, ultricies in dolor. Vivamus lacinia ligula vitae consequat vestibulum. Nulla in pretium erat. Maecenas et arcu magna. Suspendisse vehicula porttitor congue. Aliquam risus urna, luctus quis tincidunt quis, condimentum at turpis. Cras tempor neque a orci suscipit efficitur`,`Duis viverra sit amet massa in convallis. Praesent quis ultrices tortor. Etiam vitae odio bibendum, auctor nibh quis, malesuada nibh. Nunc ut mollis arcu. Proin venenatis dictum mi ut auctor. Praesent feugiat nibh et metus placerat, ut tristique turpis interdum. Sed convallis diam et risus ornare, sit amet ullamcorper metus iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut ac ornare nisi. Mauris euismod lectus non condimentum scelerisque. Nulla ante enim, commodo at dignissim a, tincidunt a erat. Vestibulum quis congue urna. Nam semper odio eget elit volutpat, sed aliquet nibh varius. Quisque eget purus urna. Fusce finibus libero sed tortor ultricies feugiat. Proin iaculis vitae justo nec ultrices`,`Suspendisse fringilla augue ipsum, quis interdum mi volutpat quis. Nam vel tortor posuere, consectetur odio sed, cursus libero. Morbi sit amet odio vitae ante aliquam maximus. Cras aliquet tortor sit amet lacus efficitur, sed imperdiet sem porta. Integer eget mollis nisl. Mauris convallis ante nisi, nec eleifend dui mattis sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus`,`Mauris eu ultrices nisl, vitae commodo arcu. Nunc ut laoreet magna. Donec pellentesque odio eget consequat gravida. In ex nulla, pellentesque non aliquet vitae, feugiat in eros. Curabitur vitae sapien ultrices, venenatis felis id, egestas magna. Mauris ac efficitur nisl. Aliquam dapibus urna sed blandit varius. Etiam eu magna justo. Integer aliquam lacinia nisi eu suscipit. Etiam lacinia risus id lacus sodales, tempus pretium orci tempus. Duis est sem, dictum nec mauris vel, condimentum feugiat nulla. Maecenas porttitor elementum placerat`,    
];

const form = document.querySelector(".lorem-form");
const numOfLorem = document.querySelector(".numofParagraph");
const numOfLoremRange = document.querySelector(".rangeParagraph");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", e => {
    e.preventDefault();
    
    const value = parseInt(numOfLorem.value);
    let allText = text.slice(0, value);
    
    allText = allText.map(item => `<p class="lorem-result">${item}</p>`).join("");
    result.innerHTML = allText;
});

function syncElements(e) {
    const vall = e.target.value;

    numOfLorem.value = vall;
    numOfLoremRange.value = vall;    
}

numOfLorem.addEventListener("input", syncElements);
numOfLoremRange.addEventListener("input", syncElements);




// https://github.com/nabendu82/JS-Projects/blob/master/LoremIpsum/main.js 
// referencia