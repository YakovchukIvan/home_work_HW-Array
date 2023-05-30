"use strict"

const list__item = document.querySelector('.list__item');
 
const data = [
  { id: 1, language: "JavaScript", popularity: 19.1 },
  { id: 2, language: "Java", popularity: 14 },
  { id: 3, language: "Python", popularity: 13.4 },
  { id: 4, language: "C#", popularity: 13.3 },
  { id: 5, language: "TypeScript", popularity: 13.3 },
  { id: 6, language: "PHP", popularity: 7.1 },
  { id: 7, language: "Kotlin", popularity: 3.2 },
  { id: 8, language: "C++", popularity: 2.8 },
  { id: 9, language: "DB", popularity: 2.7 },
  { id: 10, language: "Swift", popularity: 2.5 },
  { id: 11, language: "Go", popularity: 1.9 },
  { id: 12, language: "Ruby", popularity: 1.8 },
  { id: 13, language: "Dart", popularity: 1.1 },
  { id: 14, language: "Scala", popularity: 0.8 },
  { id: 15, language: "Apex", popularity: 0.7 },
  { id: 16, language: "C", popularity: 0.7 },
  { id: 17, language: "1C", popularity: 0.4 },
  { id: 18, language: "Groovy", popularity: 0.3 },
  { id: 19, language: "Rust", popularity: 0.3 },
];
console.log(data.length);
console.log(data[2].language);





// function tableStart() { // функція яка вставляє години погоди

//         for (let i = 0; i < data.length; i++) {
// 			let dataLanguage = data[i];
// 			console.log("dataLanguage", dataLanguage)
			
// 			list__item.insertAdjacentHTML("beforeend", 
// 			`
// 			<li class="review">
// 				<p>${dataLanguage.language}</p>
// 				<div class="progress">
// 				<div class="progress-done" data-done="${dataLanguage.popularity}"><span class="percent">${dataLanguage.popularity}</span></div>
// 				</div>
// 			</li>
// 			`
//         )}

     
// }
// tableStart()

// function startProgres(progressDone) {
// 	console.log('Good');
// 		// progressDone.forEach(progress => {
// 		// 	const numProgress = progress.getAttribute('data-done');
// 		// 	console.log(numProgress);
// 		// 	progress.style.width = (numProgress * 10) + 'px';
// 		// });
		

// 		for (let i = 0; i < data.length; i++) {
// 			let dataLanguage = data[i];
// 			console.log("dataLanguage.popularity", dataLanguage.popularity)
// 			progressDone.style.width = dataLanguage.popularity + 'px';
//         }
// }

// document.addEventListener('DOMContentLoaded', function() {
//   // DOM-дерево повністю завантажене
//   const progressDone = document.querySelectorAll('.progress-done');
//   startProgres(progressDone);
// });


// function tableStart() {
//   for (let i = 0; i < data.length; i++) {
//     let dataLanguage = data[i];
//     list__item.insertAdjacentHTML("beforeend", `
//       <li class="review">
//         <p>${dataLanguage.language}</p>
//         <div class="progress">
//           <div class="progress-done" data-done="${dataLanguage.popularity}"><span class="percent">${dataLanguage.popularity}</span></div>
//         </div>
//       </li>
//     `);
//   }

//   startProgres();
// }

// function startProgres(progressDone) {
//   for (let i = 0; i < data.length; i++) {
//     let dataLanguage = data[i];
//     progressDone.style.width = (dataLanguage.popularity * 10) + 'px';
//   }
// }

// document.addEventListener('DOMContentLoaded', function() {
//   const progressDone = document.querySelector('.progress-done');
//   startProgres(progressDone);
// });

// tableStart();

function tableStart() {
  for (let i = 0; i < data.length; i++) {
    let dataLanguage = data[i];
    list__item.insertAdjacentHTML("beforeend", `
      <li class="review">
        <p>${dataLanguage.language}</p>
        <div class="progress">
          <div class="progress-done" data-done="${dataLanguage.popularity}"><span class="percent">${dataLanguage.popularity}</span></div>
        </div>
      </li>
    `);
  }

  startProgres();
}

function startProgres() {
  const progressDoneElements = document.querySelectorAll('.progress-done');
  progressDoneElements.forEach(progressDone => {
    const numProgress = progressDone.getAttribute('data-done');
    progressDone.style.width = (numProgress * 10) + 'px';
  });
}

document.addEventListener('DOMContentLoaded', function() {
  tableStart();
});


