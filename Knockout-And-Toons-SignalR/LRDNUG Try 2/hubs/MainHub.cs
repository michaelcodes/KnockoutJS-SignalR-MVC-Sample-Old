using ToonsKnockoutSample.Models;
using SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToonsKnockoutSample.hubs
{
    public class MainHub: Hub
    {
        public void AddToon(Toon toon)
        {
            Clients.AddToonToList(toon);
        }
    }
}