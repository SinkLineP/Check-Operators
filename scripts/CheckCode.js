let InputEnterCode = document.getElementById('input-enter-code');
let ShowCountry = document.getElementById('show-country');
let CheckButton = document.getElementById('check-btn');

function GetData() {
	fetch('../data/codes.json')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			CodeEqualsCountry(InputEnterCode, data);
		});
}

function CodeEqualsCountry(InputCode, DataCodes) {
	for (let i = 0; i < DataCodes.countries.length; i++) {
		const item = DataCodes.countries[i];

		if (item.code == InputCode.value) {
			ReturnResult(item);
		}
	}
}

function ReturnResult(Data) {
	ShowCountry.innerHTML = Data.name;
}

InputEnterCode.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        CheckButton.click();        
    }
});

function ClearInput() {
    InputEnterCode.value = "";
    ShowCountry.innerHTML = "default";
}