$(function () {
  // Accordion
  $('#accordion').accordion()

  // Datepicker
  $('#datepicker').datepicker()

  // Menu
  $('#menu').menu()
  $('#dropdown').selectmenu()

  // Slider
  $('#slider').slider()

  // Tabs
  $('#tabs').tabs()

  // Tooltip
  $('.tooltip').tooltip()

  /*   $('#gallery').unitegallery({
    gallery_theme: 'default', // можна вибрати інший темплейт
    gallery_width: 800, // ширина галереї
    gallery_height: 600, // висота галереї
    gallery_min_width: 300, // мінімальна ширина галереї
    gallery_min_height: 200, // мінімальна висота галереї
    gallery_autoplay: true, // автовідтворення
    gallery_pause_on_mouseover: true, // пауза при наведенні миші
    gallery_skin: 'default', // скин галереї
    gallery_images: [
      {
        src: 'https://picsum.photos/200',
        thumb: 'https://picsum.photos/200',
        title: 'Зображення 1',
      },
      {
        src: 'https://picsum.photos/200',
        thumb: 'https://picsum.photos/200',
        title: 'Зображення 2',
      },
      // Додайте інші фотографії
    ],
    gallery_videos: [
      { type: 'youtube', source: 'VIDEO_ID', title: 'Відео 1' },
      { type: 'vimeo', source: 'VIDEO_ID', title: 'Відео 2' },
      // Додайте інші відео
    ],
  }) */

  const currencyEndpoint =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

  $.ajax({
    url: currencyEndpoint,
    method: 'GET',
    success: function (data) {
      const usdRate = data.find((item) => item.cc === 'USD').rate
      $('#currency-widget').html(`Курс долара: ${usdRate}`)
    },
    error: function (error) {
      console.error('Помилка при отриманні курсів валют:', error)
    },
  })

  function updateClock() {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    $('#clock-widget').html(`Годинник: ${hours}:${minutes}:${seconds}`)
  }

  setInterval(updateClock, 1000)
  updateClock()

  $('.fancybox').fancybox()
})
