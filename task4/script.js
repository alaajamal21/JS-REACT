
let score = 0;

let answer1 = prompt("صحيت من النوم على مسج من آلاء ممكن تلغي المحاضرة!\n" +
    "A) بتكمل نوم\n" +
    "B) بتستنى خبر اليقين\n" +
    "C) بترجع بتكمل نوم");
if (answer1.toLowerCase() == "a" || answer1.toLowerCase() == "c") {
    score += 1;
}

let answer2 = prompt("ما الكوكب الذي يمتلك أقصر يوم؟\n" +
    "A) الأرض\n" +
    "B) المشتري\n" +
    "C) المريخ");
if (answer2.toLowerCase() == "b"){
    score+=1;
}

let answer3 = prompt("أفضل حد في pcit:");
if (answer3.toLowerCase() =="alaa" || answer3.toLowerCase() =="آلاء"){
    score+=1;
}

let answer4 = prompt("الشعبة المفضلة عند بشمهندس محمد:");
if (answer4 =="فرونت اند6" || answer4.toLowerCase() =="frontend6"){
    score+=1;
}

let answer5 = prompt( "المساق يلي بتدرسه آلاء هادا الفصل:\n" +
    "A) أمن ويب\n" +
    "B) مقدمة في الحوسبة\n" +
    "C) فرونت اند");
if (answer5.toLowerCase() =="a"){
    score+=1;
}


if (score == 5) {
    alert("نتيجتك 5/5\nممتاز الأمور بالسليم ");
}
else {
    alert(" نتيجتك " + score + "/5\n هيصير بينا خلاف ترا");
}
