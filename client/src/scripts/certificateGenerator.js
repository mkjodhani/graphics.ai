// export default function certificateGenerator({
//   collegeNameLine1,
//   collegeNameLine2,
//   action1,
//   action2,
//   action3,
//   user,
//   reason1,
//   reason2,
//   date,
//   certificate_no,
// }) {
//   //   var canvas = document.querySelector("#canvas");
//   var canvas = document.createElement("canvas");
//   var context = canvas.getContext("2d");
//   var image = new Image();

//   image.src = "../img/certificates/blank/Certificate9.png";
//   image.onload = function () {
//     drawImage();
//     setFields();
//   };
//   function drawImage() {
//     context.drawImage(image, 0, 0, canvas.width, canvas.height);
//   }
//   function setFields() {
//     //College Name Line 1
//     context.fillStyle = "#3F3F41";
//     context.font = "1000% BlackSwan";
//     context.textAlign = "center";
//     context.fillText(collegeNameLine1, 1100, 450);

//     //College Name Line 2
//     context.fillStyle = "#3F3F41";
//     context.font = "750% BlackSwan";
//     context.textAlign = "center";
//     context.fillText(collegeNameLine2, 1100, 600);

//     //Action Name Line 1
//     context.fillStyle = "#3F3F41";
//     context.font = "350% DancingScript";
//     context.textAlign = "center";
//     context.fillText(action1, 1100, 700);

//     //Action Name Line 2
//     context.fillStyle = "#3F3F41";
//     context.font = "350% DancingScript";
//     context.textAlign = "center";
//     context.fillText(action2, 1100, 780);

//     //Action Name Line 3
//     context.fillStyle = "#3F3F41";
//     context.font = "350% DancingScript";
//     context.textAlign = "center";
//     context.fillText(action3, 1100, 860);

//     //User Name 1
//     context.fillStyle = "#3F3F41";
//     context.font = "bold 700% DancingScript";
//     context.textAlign = "center";
//     context.fillText(user, 1100, 990);

//     //Reason Line 1
//     context.fillStyle = "#3F3F41";
//     context.font = "350% DancingScript";
//     context.textAlign = "center";
//     context.fillText(reason1, 1100, 1100);

//     //Reason Line 2
//     context.fillStyle = "#3F3F41";
//     context.font = "350% DancingScript";
//     context.textAlign = "center";
//     context.fillText(reason2, 1100, 1180);

//     //Date Line 1
//     context.fillStyle = "#3F3F41";
//     context.font = "240% DancingScript";
//     context.textAlign = "center";
//     context.fillText(date, 600, 1300);

//     //Date Line 2
//     context.fillStyle = "#3F3F41";
//     context.font = "bold 350% DancingScript";
//     context.textAlign = "center";
//     context.fillText("Date of certification.", 600, 1360);

//     //Date Line 1
//     context.fillStyle = "#3F3F41";
//     context.font = "240% DancingScript";
//     context.textAlign = "center";
//     context.fillText(certificate_no, 1600, 1300);

//     //Date Line 2
//     context.fillStyle = "#3F3F41";
//     context.font = "bold 350% DancingScript";
//     context.textAlign = "center";
//     context.fillText("Certificate No.", 1600, 1360);
//   }
//   function getImage() {
//     return canvas.toDataURL("image/png");
//   }
// }
