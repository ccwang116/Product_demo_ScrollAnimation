let space = $(window).height();
let navPosition = $(".bkbox").offset()
// console.log(navPosition)
$(window).scroll(function () {
    let scrolhi = $(this).scrollTop()
    // if (scrolhi > navPosition.top) { $(".bkbox").addClass("fixed-top") } else {
    //     $(".bkbox").removeClass("fixed-top")
    // }
    if (scrolhi > 0 && scrolhi <= space) {
        $(".bkbox").removeClass("active")
        $(".wtbox").removeClass("active active2")

    } else if (scrolhi >space && scrolhi <= 2 * space) {

        $(".bkbox").addClass("active")
        $(".arrow").removeClass("active")
        $(".secbox").removeClass("active")

        $(".wtbox").addClass("active active2")
    } else if (scrolhi > 2 * space && scrolhi <= 3 * space) {
        // $(".wtbox").addClass("active2")
        $(".secbox").addClass("active")
    
        $(".thirdbox").removeClass("active")
        
    } else if (scrolhi > 3 * space && scrolhi <= 4 * space) {
        $(".bkbox").removeClass("active")

        $(".secbox").removeClass("active")
        $(".thirdbox").addClass("active")
    } else if (scrolhi > 4 * space && scrolhi <= 5 * space) {
        $(".fourbox").addClass("active")
        $(".pdimg").addClass("active")
        $(".fivebox").removeClass("active")
        $(".removebox").removeClass("active")
        $(".wtbox").removeClass("active active2")
    } else if (scrolhi > 5 * space && scrolhi <= 6 * space) {
        $(".thirdbox").removeClass("active")
        $(".fourbox").removeClass("active")
        $(".fivebox").addClass("active")
        $(".ffbox").removeClass("active active2 active3")

    } else if (scrolhi > 6 * space && scrolhi <= 7 * space) {
        $(".sixbox").removeClass("active")

        $(".ffbox").addClass("active")
    } else if (scrolhi > 7 * space && scrolhi <= 8 * space) {

        $(".ffbox").addClass("active2")
        $(".sixbox").addClass("active")
    } else if (scrolhi > 8 * space && scrolhi <= 9 * space) {
        $(".ffbox").addClass("active3")

        $(".bkimg").removeClass("active")
        $(".sevbox").removeClass("active active2")
        $(".adv1").removeClass("active")
        $(".adv2").removeClass("active")
        $(".adv3").removeClass("active")
    } else if (scrolhi > 9 * space && scrolhi <= 10 * space) {
        $(".sixbox").removeClass("active")
        $(".fivebox").removeClass("active")

        $(".bkimg").addClass("active")
        $(".sevbox").addClass("active active2")
    } else if (scrolhi > 10 * space && scrolhi <= 11 * space) {
        // $(".sevbox").addClass("active2")
        $(".adv1").addClass("active")
    } else if (scrolhi > 11 * space && scrolhi <= 12 * space) {
        $(".adv2").addClass("active")

    } else if (scrolhi > 12 * space && scrolhi <= 14 * space) {
        $(".adv3").addClass("active")
        $(".btarea").removeClass("active")

    } else if (scrolhi > 14 * space && scrolhi <= 15 * space) {
        $(".sevbox").removeClass("active active2")
        $(".adv1").removeClass("active")
        $(".adv2").removeClass("active")
        $(".adv3").removeClass("active")
        $(".btarea").addClass("active")

    } else if (scrolhi > 15 * space && scrolhi <= 16 * space) {
        // $(".btarea").addClass("active")
        $(".goPageArea").addClass("active")

    } else {
        $(".arrow").removeClass("active")
        $(".bkimg").removeClass("active")
        $(".wtbox").removeClass("active active2")
        $(".secbox").removeClass("active")
        $(".thirdbox").removeClass("active")
        $(".fourbox").removeClass("active")
        $(".fivebox").removeClass("active")
        $(".sixbox").removeClass("active")
        $(".sevbox").removeClass("active active2")
        $(".adv1").removeClass("active")
        $(".adv2").removeClass("active")
        $(".adv3").removeClass("active")
        $(".btarea").removeClass("active")
        $(".goPageArea").removeClass("active")

    }
    // console.log(scrolhi)
})