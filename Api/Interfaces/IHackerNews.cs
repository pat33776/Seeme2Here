using Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Interfaces
{
    public interface IHackerNews
    {
        Task<Story> GetStory(int id = 0);
        Task<List<int>> GetJobStoryIds();
    }
}
