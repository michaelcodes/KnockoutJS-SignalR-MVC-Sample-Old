using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


public class ToonViewModel
{
    public string firstName { get; set; }
    public string lastName { get; set; }
    public List<Toon> toonNames { get; set; }
}

public class Toon
{
    public string toonName { get; set; }
}
