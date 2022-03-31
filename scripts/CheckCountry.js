let InputEnterCountry = document.getElementById('input-enter-country');
let ShowCodeCountry = document.getElementById('show-code-country');
let CheckButtonCountry = document.getElementById('check-btn-country');

function GetDataCountry() {
	fetch('../data/codes.json')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			CodeEqualsCountryCountry(InputEnterCountry, data);
		});
}

function CodeEqualsCountryCountry(InputCode, DataCodes) {
	for (let i = 0; i < DataCodes.countries.length; i++) {
		const item = DataCodes.countries[i];

		if (item.name == InputCode.value) {
			ReturnResultCountry(item);
		}
	}
}

function ReturnResultCountry(Data) {
	ShowCodeCountry.innerHTML = Data.code;
}

InputEnterCountry.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        CheckButtonCountry.click();        
    }
});

function ClearInputCountry() {
    InputEnterCountry.value = "";
    ShowCodeCountry.innerHTML = "default";
}