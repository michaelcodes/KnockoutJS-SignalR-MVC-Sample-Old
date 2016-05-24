using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ToonsKnockoutSample.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetInitialData()
        {
            var viewModel = new ToonViewModel
            {
                firstName = "Foghorn",
                lastName = "Leghorn",
                toonNames = new List<Toon>
                {
                    new Toon { toonName = "Wile E. Coyote" },
                    new Toon { toonName = "Tweety Bird" }
                }
            };

            return Json(viewModel, JsonRequestBehavior.AllowGet);
        }

    }
}
