using System.Collections.Generic;
using DevActivator.Meetups.BL.Models;

namespace DevActivator.Models
{
    public class RandomConcatModel
    {
        public List<SessionVm> Sessions { get; set; }

        public List<string> TalkIds { get; set; }

        public List<string> SpeakerIds { get; set; }

        public List<string> FriendIds { get; set; }
    }
}