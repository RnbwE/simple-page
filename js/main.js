var content = document.getElementById('content');

function pushMap() {
    content.attributeStyleMap.clear();
    content.style.backgroundColor = "#ADD8EB";
    content.style.borderRadius = "10px";
    content.style.padding = "10px";
    content.style.width = "600px";
    content.style.height = "600px";
    content.innerHTML = "";
    var mapScript = document.createElement("script");
    mapScript.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad5651e77289bc846085a122433196c832d0361b248324c29e323a0dceed919c6&amp;width=620&amp;height=600&amp;lang=ru_RU&amp;scroll=true";
    content.appendChild(mapScript);
}

function pushSend() {
    content.attributeStyleMap.clear();
	content.style.marginLeft = "15%";
    content.style.padding = "10px";
    content.style.textAlign = "center";
	content.style.backgroundColor = "#ADD8EB";
    content.style.borderRadius = "10px";
    content.innerHTML = '<form name="empform" class="codesnip" method="post"	onsubmit="return pushSubmit()" style="z-index:10;">\
		<p id="note">Отправьте нам свои контакты!</p>\
		<table width="500px">\
		<tr>\
			<td>Имя:</td>\
			<td><input name="firstname" /></td>\
		</tr>\
		<tr>\
			<td>Адрес Email:</td>\
			<td><input name="email" /></td>\
		</tr>\
		<tr>\
			<td colspan="2"><input type="submit" name="submit" value="Отправить форму"></td>\
		</tr>\
		</table>\
	</form>';
}

function validateForm()
{
	var form_object = document.forms.empform;

	if(form_object.elements.firstname.value == '')
	{
		note.style.color = "red";
    	note.innerText = 'Вы должны ввести свое имя!';
	    return false;
	}
    return true;
}

function validateMailSimple()
{	
	var note = document.getElementById("note");
	var email = document.forms.empform.elements.email.value;

	if(email.indexOf('@') < 0)
	{
		note.style.color = "red";
    	note.innerText = 'В адресе e-mail должен быть символ @';
	    return false;
  	}
	if(email.indexOf('@') != email.lastIndexOf('@'))
	{
		note.style.color = "red";
    	note.innerText = 'В адресе e-mail не может быть более одного символа @';
	    return false;
	}
	if(email.indexOf('.') < 0)
	{
		note.style.color = "red";
    	note.innerText = 'В адресе e-mail должна быть как минимум одна точка';
	    return false;
	}
	if(email.lastIndexOf('.') < email.indexOf('@'))
	{
		note.style.color = "red";
    	note.innerText = 'В адресе e-mail должна быть как минимум одна точка после символа @';
	    return false;
	}
	return true;
}

function validateEMail()
{
	var note = document.getElementById("note");
	var email = document.forms.empform.elements.email.value;

	if(!(/^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/.test(email)))
	{
		note.style.color = "red";
    	note.innerText = 'Пожалуйста, введите допустимый адрес e-mail';
	    return false;
	}
	return true;
}

function pushSubmit() {
    if(validateForm()) {
		if(validateMailSimple()) {
			if(validateEMail()) {
				console.log("3 check");
				note.style.color = "green";
				note.innerText = 'Мы с вами свяжемся!';
			}
			else {
				console.log("ошибка 3");
			}
			console.log("2 check");
		}
		else {
			console.log("ошибка 2");
		}
		console.log("1 check");
    }
    else {
        console.log("ошибка 1");
    }

	return false;
}
