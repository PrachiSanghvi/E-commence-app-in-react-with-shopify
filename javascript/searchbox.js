class searchbox {
    searchbox = () => {
        // search-box 
        $('.search-icons').click(function (e) {
            $('.searchoption').toggle()
        })
        $('.cancel-icon').click(function (e) {
            $('.searchoption').hide()
        })

        $('.shop-btn').click(function (e) {
            $('.navbar-megamenu').toggle()
        })
    }

}

let searchboxObj = new searchbox();
searchboxObj.searchbox();