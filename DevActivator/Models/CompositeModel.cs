using System.Collections.Generic;
using DevActivator.Meetups.BL.Entities;
using DevActivator.Meetups.BL.Models;

namespace DevActivator.Models
{
    public class CompositeModel
    {
        public List<SessionVm> Sessions { get; set; }

        public Dictionary<string, TalkVm> Talks { get; set; }

        public Dictionary<string, SpeakerVm> Speakers { get; set; }

        public List<Friend> Friends { get; set; }
    }
}