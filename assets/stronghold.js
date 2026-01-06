document.addEventListener('DOMContentLoaded', (e) => {
	let main = {}
	main.area_list = []
	main.area_list_selected = ''
	main.city_list = []
	main.city_list_selected = ''

	function initArea() {
		main.area_list = []
		let area_category_list = location_data.category_list
		for (value in area_category_list) {
			let category_x = area_category_list[value]

			let area_x = {}
			area_x.text = category_x.title
			area_x.value = value
			main.area_list.push(area_x)
		}
	}
	function initCity() {
		let area = main.area_list_selected

		main.city_list = []
		if (location_data.category_list.hasOwnProperty(area)) {
			area_category_list = location_data.category_list[area].category_list
		} else {
			area_category_list = []
		}

		for (value in area_category_list) {
			category_x = area_category_list[value]

			city_x = {}
			city_x.text = category_x.title
			city_x.value = value
			main.city_list.push(city_x)
		}
	}
	initArea()
	initCity()

	function refreshAreaSelect() {
		let area_obj = $('#area')
		//加入 area 項目
		let html = '<option value="" selected>請選擇區域</option>'
		for (idx in main.area_list) {
			let area = main.area_list[idx]
			html += '<option value="' + area.value + '">' + area.text + '</option>'
		}
		area_obj.html(html)

		let option = $('#area option[value="' + main.area_list_selected + '"]')
		option.attr('selected', 'selected')
		area_obj.selectpicker('refresh')
		area_obj.selectpicker('render')
	}
	refreshAreaSelect()

	function refreshCitySelect() {
		let city_obj = $('#city')

		//加入 area 項目
		let html = '<option value="" selected>請選擇城市</option>'
		for (idx in main.city_list) {
			let city = main.city_list[idx]
			html += '<option value="' + city.value + '">' + city.text + '</option>'
		}
		city_obj.html(html)

		let option = $('#city option[value="' + main.city_list_selected + '"]')
		option.attr('selected', 'selected')
		city_obj.selectpicker('refresh')
		city_obj.selectpicker('render')
	}
	refreshCitySelect()

	main.result_list = []
	function refreshLocationList() {
		let html = ''
		for (group_name in main.result_list) {
			let group = main.result_list[group_name]

			html += '<p class="font-20 text-golden font-weight-500 mb-2" data-aos="fade-up">' + group.group + '</p>'
			html += '<ul class="noneStyle lh165 mb-4">'

			for (location_name in group.location_list) {
				let location_x = group.location_list[location_name]

				html += '<li class="border-bottom-F7F7F7 pb-3 mb-3 pt-1" data-aos="fade-up">'
				html += '<p class="mb-0">' + location_x.name + '</p>'
				html +=
					'<p class="mb-0">' +
					location_x.address +
					'<span class="ml-2">[<a href="https://www.google.com.tw/maps/place/' +
					location_x.address +
					'" class="text-hover-golden mx-2" target="_blank">MAP</a>]</span></p>'
				html += '<a class="text-hover-golden" href="tel:' + location_x.phone + '">' + location_x.phone + '</a>'
				html += '</li>'
			}
			html += '</ul>'
		}
		$('#_search_result').html(html)
	}

	main.search = {}
	main.search.area = ''
	main.search.city = ''
	function search_data() {
		let _area = main.search.area
		let _city = main.search.city

		main.result_list = []
		for (category_name_1 in location_data.category_list) {
			if (_area !== '') {
				if (category_name_1 !== _area) {
					continue
				}
			}
			let category_1 = location_data.category_list[category_name_1]
			// console.log(category_1);

			for (category_name_2 in category_1.category_list) {
				if (_city !== '') {
					if (category_name_2 !== _city) {
						continue
					}
				}
				let category_2 = category_1.category_list[category_name_2]
				// console.log(category_2);

				for (category_name_3 in category_2.category_list) {
					let category_3 = category_2.category_list[category_name_3]

					let _group = {}
					_group.group = category_3.title
					_group.location_list = []
					main.result_list.push(_group)

					for (location_name in category_3.location_list) {
						let locationX = category_3.location_list[location_name]

						let location_x = {}
						location_x.name = locationX.title
						location_x.address = locationX.address
						location_x.phone = locationX.phone
						_group.location_list.push(location_x)
					}
				}
			}
		}
		// console.log(main.result_list);
	}
	search_data()
	refreshLocationList()

	$('#area').change(function (e) {
		_self = $(e.target)
		_area = $('#area').val().trim()
		if (_area === '') {
			_area = ''
		}

		main.area_list_selected = _area
		main.city_list_selected = ''
		initCity()
		refreshCitySelect()

		main.search.area = _area
		main.search.city = ''
		search_data()
		refreshLocationList()
	})

	$('#city').change(function (e) {
		let _self = $(e.target)
		let _area = $('#area').val().trim()
		let _city = $('#city').val().trim()

		main.city_list_selected = _city

		if (_area !== '' || _city !== '') {
			main.search.area = _area
			main.search.city = _city
			search_data()
			refreshLocationList()
		}
	})

    setTimeout(() => AOS.init(), 300)
})


