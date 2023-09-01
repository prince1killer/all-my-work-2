using demo2.Models;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace demo2.Data
{
    public class ApplicationDataContect:DbContext
    {
        public ApplicationDataContect(DbContextOptions<ApplicationDataContect> options ) : base(options)
        {
        
        }
        public DataSet<Category>
    }
}
