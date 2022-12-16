var contactId = 0;
$(document).ready(function() {
    setUpContacts();
    $(document).on("mouseover", ".h-number", function(e) {
        e.preventDefault();
        let hoverId = $(this).attr("id");
        console.log(hoverId);
        $(`#${hoverId} .h-hover`).fadeIn();
    })
    $(document).on("mouseleave", ".h-number", () => {
        $(".h-hover").fadeOut();
    })
});
function setUpContacts() {
    for(let i=0;i<10;i++) {
        contactId++;
        let html = `
        <div class="h-child">
            <span class="h-child-name">Filip Siri</span>
            <div class="h-child-gender-age">
                <span>Man</span>
                <span>19 år</span>
            </div>
            <span class="h-child-lives">Grytvägen 20</span>
            <div id="number-${contactId}" class="h-number">
                <div class="h-hover">Click to copy</div>
                <img src="img/tel-phone-icon-5.png">
                <span>076 097 41 23</span>
            </div>
        </div>
        `;
        $("#h-body").append(html);
    }
}